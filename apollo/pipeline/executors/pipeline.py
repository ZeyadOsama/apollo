#!/usr/bin/env python
# coding: utf8

"""
pipeline.py:
File containing Pipeline class to be used as the main orchestrator.
"""

__author__ = "Zeyad Osama"
__license__ = "MIT License"

from apollo.common.misc.constants import ReturnCode
from apollo.pipeline.jobs.interface.job import Job


class Pipeline:
    """
    Pipeline class to be used to be used as the main orchestrator.
    """

    def __init__(self) -> None:
        self.__jobs: list = []

    def execute(self) -> ReturnCode:
        rc = ReturnCode.APOLLO_RC_SUCCESS
        for job in self.__jobs:
            rc = job.execute()
            if rc != ReturnCode.APOLLO_RC_SUCCESS:
                break
        return rc

    def submit_job(self, job: Job) -> ReturnCode:
        self.__jobs.append(job)
        return ReturnCode.APOLLO_RC_SUCCESS

    def submit_probe(self) -> ReturnCode:
        raise NotImplemented
