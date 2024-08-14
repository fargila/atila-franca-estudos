# Comandos chaves vistos em aula
<ul>
    <li>git log <b>--oneline</b>¹ -> Histórico de alterações</li>
    <li>git restore --staged [Arquivo] -> Restaurar na parte de <i>staged</i></li>
    <li>git restore [Arquivo] -> Restaurar arquivo</li>
    <li>git mv [nome] [nomeNovo] -> Renomear</li>
    <li>git commit -m "Mensagem corrigida" --amend -> Corrigir a mensagem de um commit</li>
    <li>git log -p -> histórico detalhado de tudo que foi feito</li>
    <li>
        git reset
        <ul>
            <li>git reset --soft [chaveDoCommit] -> staged & volta para o commit anterior</li>
            <li>git reset --mixed [chaveDoCommit] -> unstaged & volta para o commit anterior</li>
            <li>git reset --hard [chaveDoCommit] -> deleted & volta para o commit anterior</li>
        </ul>
    </li>
    <li>git config <b>--global</b>² alias.[nome para a configuração do alias] "[comando de execução]"</li>
    <li>-> à partir do <i>alias</i> vai poder executar um comando desejado pelo nome dele</li>
</ul>
