
from django.utils.translation import ugettext_lazy as _

menu_dados_auxiliares = "menu_dados_auxiliares"
menu_tabelas_auxiliares = "menu_tabelas_auxiliares"
menu_area_trabalho = "menu_area_trabalho"
menu_contatos = "menu_contatos"
menu_processos = "menu_processos"

MENU_PERMS_FOR_USERS = (
    (menu_dados_auxiliares, _('Mostrar Menu Dados Auxiliares')),
    (menu_tabelas_auxiliares, _('Mostrar Menu de Tabelas Auxiliares')),
    (menu_contatos, _('Mostrar Menu de Cadastro de Contatos')),
    (menu_processos, _('Mostrar Menu de Cadastro de Processos')),
    (menu_area_trabalho, _('Mostrar Menu de Áreas de Trabalho')),
)


search_trecho = 'search_trecho'
SEARCH_TRECHO = (
    (search_trecho, _('Consultar base de Trechos.')),
)


rules_patterns = []
