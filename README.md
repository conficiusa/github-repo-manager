# GitHub Repository Bulk Deleter

A command-line tool to interactively select and delete multiple GitHub repositories at once.

## Features

- Interactive terminal UI for selecting repositories using arrow keys and spacebar
- Pagination for large numbers of repositories
- Filter repositories by name pattern or visibility (public/private)
- Dry run mode to preview which repositories would be deleted
- Confirmation step to prevent accidental deletions
- Color-coded selection interface for easy navigation

## Installation

### Via pip (recommended)

```bash
pip install github-repo-bulk-delete
```

### Install from source

1. Clone this repository:

```bash
git clone https://github.com/conficiusa/github-repo-bulk-delete.git
cd github-repo-bulk-delete
```

2. Install the package:

```bash
pip install -e .
```

## Usage

### Command Line Interface

After installation, you can run the tool directly using:

```bash
github-repo-delete
```

Or with command line arguments:

```bash
github-repo-delete --pattern "test-" --dry-run
```

### Python Library

You can also use the package as a Python library in your code:

```python
# Using the convenience function
from github_repo_bulk_deleter import delete_repositories

# Delete repositories interactively
delete_repositories(
    token="your-github-token",  # Optional: will prompt if not provided
    username="your-username",   # Optional: will prompt if not provided
    pattern="test-",           # Optional: filter repos by name
    visibility="private",      # Optional: 'public' or 'private'
    dry_run=True,             # Optional: preview without deleting
    no_confirm=False,         # Optional: skip confirmation
    delay=1.0                 # Optional: delay between deletions
)

# Using the class directly for more control
from github_repo_bulk_deleter import GitHubRepoBulkDeleter

# Initialize the deleter
deleter = GitHubRepoBulkDeleter(token="your-github-token", username="your-username")

# Get repositories (optionally filtered)
repos = deleter.get_repositories(filter_pattern="test-", visibility="private")

# Delete repositories with interactive selection
deleter.bulk_delete(repos, dry_run=True, confirm=True, delay=1.0)

# Or delete specific repositories directly
for repo in repos:
    deleter.delete_repository(repo['name'])
```

### Authentication

The script will prompt you for:
- Your GitHub personal access token
- Your GitHub username

You can also provide these through:
- Command line arguments
- Environment variables (`GITHUB_TOKEN` and `GITHUB_USERNAME`)

### Command Line Arguments

```
usage: github-repo-delete [-h] [--token TOKEN] [--username USERNAME]
                           [--pattern PATTERN]
                           [--visibility {public,private}] [--no-confirm]
                           [--dry-run] [--delay DELAY]

Bulk delete GitHub repositories

options:
  -h, --help            show this help message and exit
  --token TOKEN         GitHub personal access token
  --username USERNAME   GitHub username
  --pattern PATTERN     Regex pattern to match repository names
  --visibility {public,private}
                        Filter by visibility
  --no-confirm          Skip confirmation prompt
  --dry-run             Only show which repos would be deleted
  --delay DELAY         Delay between deletions in seconds
```

### Interactive UI Instructions

The script provides an interactive terminal UI for selecting repositories:

- **Navigation**: Use ↑/↓ arrow keys to move between repositories
- **Selection**: Press SPACE to select/unselect a repository
- **Pagination**: Use PgUp/PgDn to navigate between pages
- **Quick Actions**:
  - Press `a` to select all repositories
  - Press `n` to clear all selections
  - Press ENTER to confirm selection
  - Press `q` to quit without deleting

### Examples

1. Basic usage:
```bash
github-repo-delete
```

2. Delete only repositories matching a pattern:
```bash
github-repo-delete --pattern "test-"
```

3. Delete only private repositories:
```bash
github-repo-delete --visibility private
```

4. Dry run (no actual deletion):
```bash
github-repo-delete --dry-run
```

5. Skip interactive selection:
```bash
github-repo-delete --no-confirm
```

## Creating a GitHub Personal Access Token

To use this script, you need a GitHub personal access token with the `delete_repo` scope:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token" → "Generate new token (classic)"
3. Give your token a name and select the `delete_repo` scope
4. Click "Generate token" and copy the token for use with this script

## Development

To contribute to the development of this tool:

1. Clone the repository
2. Install in development mode:
```bash
pip install -e .
```
3. Make your changes
4. Submit a pull request

## Publishing to PyPI

To publish this package to PyPI (for the maintainer):

```bash
# Install build tools
pip install build twine

# Build the package
python -m build

# Upload to PyPI (you'll need PyPI credentials)
twine upload dist/*
```

## Security Note

Never share your personal access token. The token allows deletion of repositories, so handle it with care.

## License

This project is licensed under the MIT License - see the LICENSE file for details.