#!/usr/bin/env python

"""job.py: File containing Job class to be used as the executors for the pipeline."""

__author__ = "Zeyad Osama"


class Job:
    """
    Job class to be used as the executors for the pipeline.
    """

    def __init__(self) -> None:
        super().__init__()

    def initialize(self):
        pass

    def terminate(self):
        pass

    def feed(self):
        pass

    def execute(self):
        pass
