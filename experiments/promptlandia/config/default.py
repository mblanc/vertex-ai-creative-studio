# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""This module defines the default configuration for the Promptlandia application.

It uses a dataclass to define the configuration parameters, which are loaded
from environment variables. This allows for easy configuration of the
application without modifying the code.
"""

import os
from dataclasses import dataclass, field
from dotenv import load_dotenv

load_dotenv(override=True)


@dataclass
class Default:
    """Default application configuration.

    This dataclass defines the default configuration for the application. The
    values are loaded from environment variables, with default values provided
    for some parameters.

    Attributes:
        PROJECT_ID: The Google Cloud project ID.
        LOCATION: The Google Cloud location to use for the generative AI model.
        MODEL_ID: The ID of the generative AI model to use.
        INIT_VERTEX: Whether to initialize the Vertex AI client.
    """

    PROJECT_ID: str = field(default_factory=lambda: os.environ.get("PROJECT_ID"))
    LOCATION: str = os.environ.get("LOCATION", "us-central1")
    MODEL_ID: str = os.environ.get("MODEL_ID", "gemini-2.5-flash")
    INIT_VERTEX: bool = True
