import 'package:flutter/material.dart';
import 'package:flutter_application_2/dummy_data.dart';
import 'package:flutter_application_2/result_screen.dart';

class QuestionsScreen extends StatefulWidget {
  const QuestionsScreen({super.key});

  @override
  State<StatefulWidget> createState() {
    return _QuestionsScreen();
  }
}

class _QuestionsScreen extends State<QuestionsScreen> {
  int counter = 0;

  final answers = [];
  var correctAnswersCnt = 0;
  final shuffledQuestions = [...questionsData]..shuffle();

  changeQuestionHandler(data) {
    final currentQuestion = shuffledQuestions[counter];
    var correctAnswer = (currentQuestion['variants'] as List)
        .firstWhere((v) => v['correct'] == true);

    if (shuffledQuestions.length - 1 >= counter) {
      if (data['id'] == correctAnswer['id']) {
        ++correctAnswersCnt;
      }
      Object toSend = {
        'title': currentQuestion['title'],
        'currentAnswer': data['answer'],
        'correct': correctAnswer['answer'],
      };
      answers.add(toSend);

      setState(() {
        counter++;
      });
    } else {
      counter++;
    }
  }

  @override
  Widget build(BuildContext context) {
    if (counter <= shuffledQuestions.length - 1) {
      var question = shuffledQuestions[counter];
      final shuffledVariants = [...question['variants'] as List]..shuffle();

      return Scaffold(
        body: Container(
            width: double.infinity, // Ensures the container takes full width
            height: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 20),
            decoration: const BoxDecoration(
                gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                  Color.fromARGB(255, 4, 13, 113),
                  Color.fromARGB(255, 36, 8, 176)
                ])),
            child:
                Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    question["title"] as String,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 28, color: Colors.blue),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Column(
                    children: (shuffledVariants).map((ans) {
                      return Padding(
                          padding: const EdgeInsets.symmetric(vertical: 4.0),
                          child: SizedBox(
                              width: double.infinity,
                              child: TextButton(
                                onPressed: () =>
                                    {changeQuestionHandler.call(ans)},
                                style: TextButton.styleFrom(
                                    backgroundColor: Colors.blue,
                                    foregroundColor: Colors.white,
                                    shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.circular(8))),
                                child: Text(ans['answer'] as String),
                              )));
                    }).toList(),
                  ),
                ],
              )
            ])),
      );
    } else {
      return ResultScreens(
          answers: answers, totalAnswersCnt: correctAnswersCnt);
    }
  }
}
