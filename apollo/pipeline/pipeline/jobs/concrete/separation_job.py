#!/usr/bin/env python
# coding: utf8

"""
separation_job.py:
File containing SeparationJob class to be used as an executor for the pipeline.
"""

__author__ = "Zeyad Osama"
__license__ = "MIT License"

from apollo.common.misc.constants import ReturnCode
from apollo.pipeline.pipeline.jobs.interface.job import Job


class SeparationJob(Job):
    """
    Job class to be used as the executors for the pipeline.
    """

    def __init__(self) -> None:
        super().__init__()

    def initialize(self) -> ReturnCode:
        pass

    def terminate(self) -> ReturnCode:
        pass

    def feed(self) -> ReturnCode:
        pass

    def execute(self):
        pass
