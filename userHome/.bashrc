# create a file C:\Users\[user]\.bashrc
# add this content
# add your onw aliases or changes these ones as you like
# to make a dot (.bashrs) file in windows, create a file ".bashrs." (without extention) and save. windows will save it as ".bashrc"

## export PS1="\h:\w[\$(ahead_behind)]$"

##alias ls='ls -alh'
alias ll='ls -lhaG'
alias sbrc='cd ~ && source .bashrc'
alias mydocs='cd ~/Documents'
alias mydownloads='cd ~/Downloads'
alias sbrc='cd ~ && source .bashrc'
alias mci='mvn clean install'
alias repo='cd /c/working/repo'

# ----------------------
# Git Aliases
# ----------------------
alias ga='git add'
alias gaa='git add .'
alias gaaa='git add --all'
alias gau='git add --update'
alias gb='git branch'
alias gbd='git branch --delete '
alias gc='git commit'
alias gcm='git commit --message'
alias gcf='git commit --fixup'
alias gco='git checkout'
alias gcob='git checkout -b'
alias gcom='git checkout master'
alias gcos='git checkout staging'
alias gcod='git checkout develop'
alias gd='git diff'
alias gda='git diff HEAD'
alias gi='git init'
alias glg='git log --graph --oneline --decorate --all'
alias gld='git log --pretty=format:"%h %ad %s" --date=short'
alias glda='git log --pretty=format:"%h %ad %s" --date=short --all'
alias gm='git merge --no-ff'
alias gma='git merge --abort'
alias gmc='git merge --continue'
alias gp='git pull'
alias gpr='git pull --rebase'
alias gr='git rebase'
alias gs='git status'
alias gss='git status --short'
alias gst='git stash'
alias gsta='git stash apply'
alias gstd='git stash drop'
alias gstl='git stash list'
alias gstp='git stash pop'
alias gsts='git stash save'
alias gstpu='git stash push'
alias gddiff='git diff upstream/master..master  --name-status'
alias gdstatus='git diff upstream/master..master  --shortstat'
# ----------------------
# Git Functions
# ----------------------
# Git log find by commit message
function glf() { git log --all --grep="$1"; };
function glfc() { git log --all --grep="$1" --oneline; };
function ahead_behind {
curr_branch=$(git rev-parse --abbrev-ref HEAD);
curr_remote=$(git config branch.$curr_branch.remote);
curr_merge_branch=$(git config branch.$curr_branch.merge | cut -d / -f 3);
git rev-list --left-right --count $curr_branch...$curr_remote/$curr_merge_branch | tr -s '\t' '|';
}
function gitstashapply() {
    git stash apply $(git stash list | grep "$1" | cut -d: -f1)
}