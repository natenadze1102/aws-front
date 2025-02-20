import 'package:flutter/material.dart';

class HeaderText extends StatelessWidget {
  final dynamic title;

  const HeaderText(
    this.title, {
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Text(title);
  }
}
