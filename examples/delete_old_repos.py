"""
Example script demonstrating how to use github-repo-manager as a library
to manage repositories that match a specific pattern.
"""
from github_repo_manager import GitHubRepoManager

def delete_old_test_repos():
    # Initialize without credentials - will prompt if needed
    manager = GitHubRepoManager()
    
    # Get all repositories matching the pattern "test-"
    repos = manager.get_repositories(
        filter_pattern="test-",
        visibility="private"  # Only look at private repos
    )
    
    if not repos:
        print("No matching repositories found")
        return
        
    print(f"Found {len(repos)} repositories matching the pattern")
    
    # Delete the repositories with interactive selection
    # Set dry_run=True to preview without actually deleting
    manager.bulk_delete(
        repos,
        dry_run=True,    # Set to False to actually delete
        confirm=True,    # Show interactive selection UI
        delay=1.0        # Wait 1 second between operations
    )

if __name__ == "__main__":
    delete_old_test_repos()