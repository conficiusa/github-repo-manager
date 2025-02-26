# GitHub Repository Bulk Deleter

A command-line tool to interactively select and delete multiple GitHub repositories at once.

## Features

- Interactive terminal UI for selecting repositories using arrow keys and spacebar
- Pagination for large numbers of repositories
- Filter repositories by name pattern or visibility (public/private)
- Dry run mode to preview which repositories would be deleted
- Confirmation step to prevent accidental deletions
- Color-coded selection interface for easy navigation

## Requirements

- Python 3.6+
- Required Python packages:
  - requests
  - blessed

## Installation

1. Clone this repository or download the script:

```bash
git clone https://github.com/yourusername/github-repo-bulk-delete.git
cd github-repo-bulk-delete
```

2. Install required dependencies:

```bash
pip install requests blessed
```

## Usage

Run the script with Python:

```bash
python github-repo-bulk-delete.py
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
usage: github-repo-bulk-delete.py [-h] [--token TOKEN] [--username USERNAME]
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
python github-repo-bulk-delete.py
```

2. Delete only repositories matching a pattern:
```bash
python github-repo-bulk-delete.py --pattern "test-"
```

3. Delete only private repositories:
```bash
python github-repo-bulk-delete.py --visibility private
```

4. Dry run (no actual deletion):
```bash
python github-repo-bulk-delete.py --dry-run
```

5. Skip interactive selection:
```bash
python github-repo-bulk-delete.py --no-confirm
```

## Creating a GitHub Personal Access Token

To use this script, you need a GitHub personal access token with the `delete_repo` scope:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token" → "Generate new token (classic)"
3. Give your token a name and select the `delete_repo` scope
4. Click "Generate token" and copy the token for use with this script

## Security Note

Never share your personal access token. The token allows deletion of repositories, so handle it with care.

## License

This project is licensed under the MIT License - see the LICENSE file for details.