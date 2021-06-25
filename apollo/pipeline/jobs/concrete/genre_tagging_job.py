#!/usr/bin/env python
# coding: utf8

"""
genre_tagging_job.py:
File containing GenreTaggingJob class to be used as an executor for the pipeline.
"""

__author__ = "Zeyad Osama"
__license__ = "MIT License"

from apollo.common.misc.constants import ReturnCode
from apollo.pipeline.jobs.interface.job import Job


class GenreTaggingJob(Job):
    """
    Job class to be used as the executors for the pipeline.
    """

    def __init__(self) -> None:
        super().__init__()

    def initialize(self) -> ReturnCode:
        raise NotImplemented

    def terminate(self) -> ReturnCode:
        raise NotImplemented

    def feed(self) -> ReturnCode:
        raise NotImplemented

    def execute(self):
        raise NotImplemented
