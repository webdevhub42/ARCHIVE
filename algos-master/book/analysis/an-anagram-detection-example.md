---
title: An Anagram Detection Example
collection: analysis
position: 3
layout: default.html
---

To explore different orders of magnitude, let’s consider four different solutions to the problem of detecting if a string is an anagram. One string is an anagram of another if the second is a rearrangement of the letters in the first. For example, `'heart'` and `'earth'` are anagrams.

For the sake of simplicity, let’s assume that the two strings in question use symbols from the set of 26 lowercase alphabetic characters. Our goal is to write a boolean function that will take two strings and return whether they are anagrams.


<!-- language python -->
<!-- literate analysis/anagrams.py -->
<!-- /language -->

<!-- language javascript -->
<!-- literate analysis/anagrams.js -->
<!-- /language -->
