## Spell Checker

- Sentence, check if the words in a sentence are well spelled
- Just string as input
- The words to check will be inside an array
- We are assuming the existence of an english vocabulary

|     input     |           output            |
| :-----------: | :-------------------------: |
|     "Hi"      |            "Hi"             |
|     "HI"      |            "Hi"             |
|     "Ht"      |           "~Ht~"            |
| "Hello yot "  |        "Hello ~yot~"        |
| "Hello you "  |         "Hello you"         |
| INVALID INPUT | "You must provide a string" |

|      nouns       |     verbs      |
| :--------------: | :------------: |
| Sentence / Spell | spellChecker() |
