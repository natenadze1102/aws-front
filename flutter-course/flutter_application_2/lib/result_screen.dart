import 'package:flutter/material.dart';
import 'package:flutter_application_2/questions_screen.dart';

class ResultScreens extends StatefulWidget {
  final dynamic answers;
  final dynamic totalAnswersCnt;

  const ResultScreens({super.key, this.answers, this.totalAnswersCnt});

  @override
  State<StatefulWidget> createState() {
    return _ResultScreenState();
  }
}

class _ResultScreenState extends State<ResultScreens> {
  var currentScreen = 'result_screen';

  void pressHandler() {
    setState(() {
      currentScreen = 'start_screen';
    });
  }

  @override
  Widget build(BuildContext context) {
    final answers = widget.answers;
    final totalAnswersCnt = widget.totalAnswersCnt;

    return currentScreen == 'result_screen'
        ? Container(
            alignment: Alignment.center,
            padding: const EdgeInsets.symmetric(horizontal: 40),
            height: double.infinity,
            width: double.infinity,
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [Colors.blue, Colors.green],
              ),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                    'You answered $totalAnswersCnt out 6 questions correctly!'),
                const SizedBox(height: 40),
                ResultScreenAnswers(
                  answers: answers,
                ),
                OutlinedButton(
                  style: ElevatedButton.styleFrom(
                      side: BorderSide.none,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(2))),
                  onPressed: pressHandler,
                  child: const Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [Icon(Icons.replay), Text(('Restart Quiz!'))],
                  ),
                ),
              ],
            ))
        : const QuestionsScreen();
  }
}

class ResultScreenAnswers extends StatelessWidget {
  final dynamic answers;
  const ResultScreenAnswers({super.key, this.answers});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 400,
      child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: answers.asMap().entries.map<Widget>((entry) {
            final index = entry.key + 1; // Access the index
            final elem = entry.value; // Access the element

            return Row(
              textBaseline: TextBaseline.alphabetic,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(height: 60),
                Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      color: Colors.deepOrangeAccent,
                    ),
                    alignment: Alignment.center,
                    width: 30,
                    height: 30,
                    child: Text(
                      '$index',
                      style: const TextStyle(color: Colors.white),
                    )),
                const SizedBox(width: 20),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        elem['title'],
                        style: const TextStyle(fontSize: 18),
                      ),
                      Text(
                        elem['currentAnswer'],
                        style:
                            const TextStyle(fontSize: 14, color: Colors.indigo),
                      ),
                      Text(
                        elem['correct'],
                        style:
                            const TextStyle(fontSize: 14, color: Colors.brown),
                      )
                    ],
                  ),
                )
              ],
            );
          }).toList(), // Convert the Iterable to a List<Widget>
        ),
      ),
    );
  }
}
