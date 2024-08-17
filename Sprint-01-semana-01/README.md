# Comandos chaves vistos em aula

<ul>
    <h2>git</h2>
<ul>
    <li>git log <b>--oneline</b>¹ >>> Histórico de alterações;</li>
    <li>git restore --staged [Arquivo] >>> Restaurar na parte de <i>staged;</i></li>
    <li>git restore [Arquivo] >>> Restaurar arquivo;</li>
    <li>git mv [nome] [nomeNovo] >>> Renomear;</li>
    <li>git commit -m "Mensagem corrigida" --amend >>> Corrigir a mensagem de um commit;</li>
    <li>git log -p >>> histórico detalhado de tudo que foi feito;</li>
    <li>
        git reset;
        <ul>
            <li>git reset --soft [chaveDoCommit] >>> staged & volta para o commit anterior,</li>
            <li>git reset --mixed [chaveDoCommit] >>> unstaged & volta para o commit anterior,</li>
            <li>git reset --hard [chaveDoCommit] >>> deleted & volta para o commit anterior,</li>
        </ul>
    </li>
    <li>git config <b>--global</b>² alias.[nome para a configuração do alias] "[comando de execução]"
    >>> à partir do <i>alias</i> vai poder executar um comando desejado pelo nome dele. NOTA: todas 
    essas configurações estão no arquivo ".gitconfig";
    </li>
    <li>git merge -m "Mergeie alguma branch com a main" [branch desejada];</li>
    <li>git branch -d [branch que será deletada];</li>
</ul>

<h3>Obs.:</h3>
<ul>
    <li>[¹] Caso queira ver o histórico das ações linha por linha;</li>
    <li>[²] --global serve para caso queira que essas configurações sejam para todos os integrantes do projeto;</li>
</ul>
    <h2>git reset</h2>
    <li>git reset --soft HEAD~x >>> staged & volta para os commits anteriores em 'x' casas,</li>
    <li>git reset --mixed HEAD~x >>> unstaged & volta para os commits anteriores em 'x' casasr,</li>
    <li>git reset --hard HEAD~x >>> deleted & volta para os commits anteriores em 'x' casas,</li>
    <h2>git stash</h2>
    <li>git stash list >>> list of files I've stashed;</li>
    <li>git stash pop x >>> remove the xº stashed file and put it on the staged area;</li>
    <li>git stash clear >>> remove all the data from the stash;</li>
    <li>git reflog >>> check all of the previous commands in case of permanent lost via terminal;</li>
    <li>git cherry-pick [ID of the head] >>> Copy commit inclunding the changes made only in this commit as HEAD to ohter branch;</li>
    <h2>git branch</h2>
    <li>git branch -a >>> Show all branches</li>
    <li>git branch -r >>> Show remote tracking branches</li>
    <li>git remote show origin >>> Show detailed configuration</li>
    <li>git branch -vv >>> List local tracking branches and their remotes</li>
    <li>git branch --track [nomeDaBranch] origin/[nomeDaBranch] >>> Create local tracking branch</li>
    <li>git push -u origin feature-upstream;</li>
    <li>git branch --delete --remotes [nameOfTheTrackingBranch] >>> Deletes a remote tracking branch;</li>
    <li>git push origin --delete [nameOfTheRemoteBranch] >>> Deletes a remote branch;</li>
</ul>