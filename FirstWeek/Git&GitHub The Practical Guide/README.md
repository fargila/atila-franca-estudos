# Comandos chaves vistos em aula

<ul>
    <h2>git reset</h2>
    <ul>
        <li>git reset --soft HEAD~x >>> staged & volta para os commits anteriores em 'x' casas,</li>
        <li>git reset --mixed HEAD~x >>> unstaged & volta para os commits anteriores em 'x' casasr,</li>
        <li>git reset --hard HEAD~x >>> deleted & volta para os commits anteriores em 'x' casas,</li>
    </ul>
    <h2>git stash</h2>
    <li>git stash list >>> list of files I've stashed;</li>
    <li>git stash pop x >>> remove the xº stashed file and put it on the staged area;</li>
    <li>git stash clear >>> remove all the data from the stash;</li>
    <li>git reflog >>> check all of the previous commands in case of permanent lost via terminal;</li>
    <li>git cherry-pick [ID of the head] >>> Copy commit inclunding the changes made only in this commit as HEAD to ohter branch;</li>
    <li><h3>git branch</h3></li>
    <li>git branch -a >>> Show all branches</li>
    <li>git branch -r >>> Show remote tracking branches</li>
    <li>git remote show origin >>> Show detailed configuration</li>
    <li>git branch -vv >>> List local tracking branches and their remotes</li>
    <li>git branch --track [nomeDaBranch] origin/[nomeDaBranch] >>> Create local tracking branch</li>
    <li>git push -u origin feature-upstream</li>
    <li>git branch --delete --remotes [nameOfTheTrackingBranch] >>> Deletes a remote tracking branch</li>
    <li>git push origin --delete [nameOfTheRemoteBranch] >>> Deletes a remote branch</li>
</ul>