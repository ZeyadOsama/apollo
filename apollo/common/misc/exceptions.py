#!/usr/bin/env python
# coding: utf8

"""
exceptions.py:
File containing exceptions classes to be used by different components.
"""

__author__ = "Zeyad Osama"
__license__ = "MIT License"


class Undefined(Exception):
    """Exception raised for errors.
    """

    def __init__(self):
        super().__init__("")
