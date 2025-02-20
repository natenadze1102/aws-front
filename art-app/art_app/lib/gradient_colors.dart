import 'package:flutter/material.dart';

class GradientColorss extends StatelessWidget {
  final List<Color> colors;

  const GradientColorss(this.colors, {super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          gradient: LinearGradient(
        begin: Alignment.topLeft,
        end: const Alignment(0.8, 1),
        colors: colors,
      )),
    );
  }
}
