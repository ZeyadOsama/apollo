#!/usr/bin/env python
# coding: utf8

"""
pipeline.py:
File containing Pipeline class to be used as the main orchestrator.
"""

__author__ = "Zeyad Osama"
__license__ = "MIT License"

from apollo.common.misc.constants import ReturnCode


class Pipeline:
    """
    Pipeline class to be used to be used as the main orchestrator.
    """

    def __init__(self) -> None:
        super().__init__()

    def execute(self) -> ReturnCode:
        pass

    def submit_job(self) -> ReturnCode:
        pass

    def submit_probe(self) -> ReturnCode:
        pass
