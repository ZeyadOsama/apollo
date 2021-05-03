#!/usr/bin/env python
# coding: utf8

"""
job.py:
File containing Job class to be used as the executors for the pipeline.
"""

__author__ = "Zeyad Osama"
__license__ = "MIT License"

from abc import ABC, abstractmethod

from apollo.common.misc.constants import ReturnCode


class Job(ABC):
    """
    Job class to be used as the executors for the pipeline.
    """

    def __init__(self) -> None:
        super().__init__()

    @abstractmethod
    def initialize(self) -> ReturnCode:
        pass

    @abstractmethod
    def terminate(self) -> ReturnCode:
        pass

    @abstractmethod
    def feed(self) -> ReturnCode:
        pass

    @abstractmethod
    def execute(self):
        pass
