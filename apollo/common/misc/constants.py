#!/usr/bin/env python
# coding: utf8

"""
constants.py:
File containing miscellaneous constants, like return codes for example
to be used as status flags for all packages.
"""

__author__ = "Zeyad Osama"
__license__ = "MIT License"

from enum import IntEnum


class ReturnCode(IntEnum):
    """
    ReturnCodes enum class to be used as status flags for all packages.
    """
    APOLLO_RC_FAILURE = 0
    APOLLO_RC_SUCCESS = 1
    APOLLO_RC_ABORTED = 2
