const questionsData = [
  {
    "title": 'What are the main building blocks of Flutter UIs?',
    "variants": [
      {"answer": "Functions", "correct": false, "id": 1},
      {"answer": "Components", "correct": false, "id": 2},
      {"answer": "Blocks", "correct": false, "id": 3},
      {"answer": "Widgets", "correct": true, "id": 4},
    ]
  },
  {
    "title": 'How flutter UIs built?',
    'variants': [
      {
        "answer": "By combining widgets in visual editor",
        "correct": false,
        "id": 5
      },
      {
        "answer": "By using xcode for iOS and Android Studio for Android",
        "correct": false,
        "id": 6
      },
      {"answer": "By combining widgets in code", "correct": true, "id": 8},
      {
        "answer": "By defining widgets in config files",
        "correct": false,
        "id": 9
      },
    ]
  },
  {
    "title": "What's the purpose of a Stateful Widget?",
    'variants': [
      {
        "answer": "Render UI that does not depend on data",
        "correct": false,
        "id": 10
      },
      {"answer": "Update data as UI changes", "correct": false, "id": 11},
      {"answer": "Ignor data changes", "correct": false, "id": 12},
      {"answer": "Update ui as data changes", "correct": true, "id": 13},
    ]
  },
  {
    "title": "What happens if you change data in StatelessWidget?",
    'variants': [
      {
        "answer": "The closest StatefulWidget is updated",
        "correct": false,
        "id": 14
      },
      {"answer": "The UI is updated", "correct": false, "id": 15},
      {
        "answer": "Any nested StatefulWidgets are updated",
        "correct": false,
        "id": 16
      },
      {"answer": "The UI is not updated", "correct": true, "id": 17},
    ]
  },
  {
    "title": 'How should you update data inside of StatefulWidget?',
    'variants': [
      {"answer": "By calling setState()", "correct": true, "id": 18},
      {"answer": "By calling updateUI()", "correct": false, "id": 19},
      {"answer": "By calling updateData()", "correct": false, "id": 20},
      {"answer": "By Calling updateState()", "correct": false, "id": 21},
    ]
  },
  {
    "title":
        'Which widget should you try to use more often: StatefullWidget or StatelessWidget?',
    'variants': [
      {
        "answer": "None of the above",
        "correct": false,
        "id": 22,
      },
      {
        "answer": "StatefulWidget",
        "correct": false,
        "id": 23,
      },
      {
        "answer": "StatelessWidget",
        "correct": true,
        "id": 24,
      },
      {
        "answer": "Both are equally good",
        "correct": false,
        "id": 25,
      },
    ]
  }
];
