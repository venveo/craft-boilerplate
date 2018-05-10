<?php
/**
 * Data Import module for Craft CMS 3.x
 *
 * Data Import
 *
 * @link      https://www.venveo.com
 * @copyright Copyright (c) 2018 Venveo
 */

namespace modules\dataimportmodule\console\controllers;

use Craft;
use craft\elements\Category;
use craft\elements\Entry;
use craft\elements\MatrixBlock;
use craft\elements\Tag;
use craft\records\CategoryGroup;
use craft\records\Section;
use yii\console\Controller;

/**
 * @author    Venveo
 * @package   DataImportModule
 * @since     1.0.0
 */
class ImportController extends Controller
{
    // Public Methods
    // =========================================================================

    private function println($text)
    {
        print($text.PHP_EOL);
    }

    /**
     * Handle data-import-module/import-command console commands
     *
     * The first line of this method docblock is displayed as the description
     * of the Console Command in ./craft help
     *
     * @return mixed
     */
    public function actionIndex()
    {

        $offset = 0;
        $dataDirectory = 'storage/data/';
        $dataFiles = array_diff(scandir($dataDirectory), array('..', '.'));
        foreach($dataFiles as $fileName) {
            $filePath = $dataDirectory . $fileName;
            if (($handle = fopen($filePath, 'r')) !== false) {
                $headers = fgetcsv($handle);
                $row = 1;
                while (($data = fgetcsv($handle)) !== false) {
                    if ($row > $offset) {
                        // Parse the data out of the line
                        $this->parseLine($data);
                    }
                    $row++;
                }
                fclose($handle);
            }
        }
    }

    private function parseLine($data)
    {
    }



    private function parseUniqueValues($data, &$holder, $split = null, $value)
    {
        $data = trim($data);
        if (!$data) {
            return;
        }
        $more = null;
        if ($split) {
            $more = explode($split, $data);
        }
        if (is_array($more)) {
            foreach ($more as $item) {
                $this->parseUniqueValues($item, $holder, null, $value);
            }
        } else {
            $key = (string)trim($data);
            if (!isset($holder[$key])) {
                $holder[$key] = $value;
            }
        }
        $holder = array_filter($holder);
    }

    private function processCategoryGroups($categoryHandle, $categories)
    {
        $group = Craft::$app->categories->getGroupByHandle($categoryHandle);
        foreach ($categories as $category => $data) {
            $this->findOrCreateCategory($category, $group);
        }
    }

    private function parseBooleanCell($cell)
    {
        $cell = trim(strtolower($cell));

        return $cell === 'y' || $cell === 'yes' || $cell == 1;
    }

    private function processTagGroup(&$entry, $fieldHandle, $tagGroup, $tags)
    {
        $tagsToAttach = [];
        foreach ($tags as $tagName) {
            $tag = Tag::find()->title($tagName)->group($tagGroup)->one();
            if ($tag) {
                array_push($tagsToAttach, $tag->id);
            } else {
                $tagName = trim($tagName);
                if ($tagName) {
                    $tag = new Tag();
                    $tag->title = $tagName;
                    $tag->groupId = $tagGroup->id;
                    $created = Craft::$app->elements->saveElement($tag);
                    array_push($tagsToAttach, $tag->id);
                    print("Created new tag: $tagName in ".$tagGroup->handle.PHP_EOL);
                }
            }
        }
        print("Attaching ".count($tagsToAttach)." tags to ".$entry->title.PHP_EOL);
        $entry->$fieldHandle = $tagsToAttach;
    }

    /**
     * @param $title
     * @param CategoryGroup $group
     *
     * @throws \Throwable
     * @throws \craft\errors\ElementNotFoundException
     * @throws \yii\base\Exception
     */
    private function findOrCreateCategory($title, $group)
    {
        $groupHandle = $group->handle;
        /** @var Category $cat */
        $cat = Category::find()->title($title)->group($groupHandle)->one();
        if ($cat instanceof Category) {
            print("Category Exists in ".$cat->title.": ".$cat->id." -> ".$cat->title.PHP_EOL);
        } else {
            $cat = new Category();
            $cat->groupId = $groupHandle->id;
            $cat->title = $title;
            $created = Craft::$app->categories->saveCategory($cat);
            print("Category Created in ".$cat->title.": ".$cat->id." -> ".$cat->title.PHP_EOL);
        }
        return $cat;
    }

    /**
     * @param string $title
     * @param Section $section
     *
     * @throws \Throwable
     * @throws \craft\errors\ElementNotFoundException
     * @throws \yii\base\Exception
     */
    private function findOrCreateEntry($title, $section, $entryTypeId)
    {
        $sectionHandle = $section->handle;
        /** @var Category $entry */
        $entry = Entry::find()->title($title)->section($sectionHandle)->one();
        if ($entry instanceof Entry) {
            print("Entry Exists in ".$section->name.": ".$entry->id." -> ".$entry->title.PHP_EOL);
        } else {
            $entry = new Entry();
            $section = Craft::$app->getSections()->getSectionByHandle($sectionHandle);
            $entry->sectionId = $section->id;
            $entry->typeId = $entryTypeId;
            $entry->title = $title;
            $created = Craft::$app->entries->saveEntry($entry);
            print("Entry Created in ".$section->name.": ".$entry->id." -> ".$entry->title.PHP_EOL);
        }
        return $entry;
    }


    private function getCategoryIDs($groupHandle, $categoryTitles)
    {
        if (!$categoryTitles) return [];
        if (!is_array($categoryTitles)) {
            $categoryTitles = [$categoryTitles];
        }
        $categories = [];
        foreach ($categoryTitles as $categoryTitle) {
            $group = Craft::$app->getCategories()->getGroupByHandle($groupHandle);
            if (!$group instanceof \craft\models\CategoryGroup) {
                die("Failed to find group: ".$groupHandle);
            }
            $new = $this->findOrCreateCategory($categoryTitle, $group);
            $categories[] = $new->id;
        }

        return $categories;
    }


    private function getEntryIds($sectionHandle, $entryTypeId, $entryTitles)
    {
        if (!is_array($entryTitles)) {
            $entryTitles = [$entryTitles];
        }
        $entries = [];
        foreach ($entryTitles as $entryTitle) {
            $section = Craft::$app->getSections()->getSectionByHandle($sectionHandle);
            if (!$section instanceof \craft\models\Section) {
                die("Failed to find section: ".$sectionHandle);
            }
            $new = $this->findOrCreateEntry($entryTitle, $section, $entryTypeId);
            $entries[] = $new->id;
        }

        return $entries;
    }
}
