// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/muzik$1.0.0/src/app/views/artistas/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Listagem de Artistas</title><link href=\"/estatico/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\"><link href=\"/estatico/bootstrap/css/style.css\" rel=\"stylesheet\"><link href=\"/estatico/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"http://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\"><link href=\"http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic\" rel=\"stylesheet\" type=\"text/css\"><!--[if lt IE 9]>\r\n        <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\r\n        <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\r\n    <![endif]--></head><body id=\"page-top\" class=\"index\">");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container\"><div class=\"navbar-header page-scroll\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a class=\"navbar-brand\" href=\"/\">Muzik</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav navbar-right\"><li class=\"hidden\"><a href=\"/\"></a></li><li class=\"page-scroll\"><a href=\"/\">Álbuns</a></li><li class=\"page-scroll\"><a href=\"/\">Sobre</a></li><li class=\"page-scroll\"><a href=\"/\">Artistas</a></li><li class=\"nav-item text-center dropdown\"><a class=\"nav-link nav dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">Cadastro</a><ul class=\"dropdown-menu\"><ul class=\"dropdown-item d-block\"><a class=\"d-block\"></a><a href=\"/artistas/form\">Artistas</a></ul></ul></li><li class=\"nav-item text-center dropdown\"><a class=\"nav-link nav dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">Consulta</a><ul class=\"dropdown-menu\"><ul class=\"dropdown-item d-block\"><a class=\"d-block\"></a><a href=\"/artistas\">Artistas</a></ul></ul></li></ul></div></div></nav><header><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><img class=\"img-responsive\" src=\"/estatico/img/header/artist.png\" alt=\"\"><div class=\"intro-text\"><span class=\"inicio\">Página de Artistas Cadastrados</span></div></div></div></div></header><section id=\"album\"><div class=\"container\"><div class=\"row\"><main class=\"conteudoPrincipal\"><h1> Listagem de Artistas </h1><br><table id=\"artistas\" class=\"table table-striped table-hover\"><thead class=\"thead-dark\"><tr><th>ID</th><th>Nome</th><th>Nacionalidade</th><th>Editar</th><th>Remover</th></tr></thead><tbody>");

  var for__67 = 0;

  marko_forEach(data.artistas, function(artista) {
    var keyscope__68 = "[" + ((for__67++) + "]");

    out.w("<tr id=\"artista_" +
      marko_escapeXmlAttr(artista.id) +
      "\"><td>" +
      marko_escapeXml(artista.id) +
      "</td><td>" +
      marko_escapeXml(artista.nome) +
      "</td><td>" +
      marko_escapeXml(artista.nacionalidade) +
      "</td><td><a href=\"/artistas/form/" +
      marko_escapeXmlAttr(artista.id) +
      "\">Editar</a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(artista.id) +
      "\" data-type=\"remocao\">Remover</a></td></tr>");
  });

  out.w("</tbody></table></main></div></div></section><footer class=\"text-center\"><div class=\"footer-above\"><div class=\"container\"><div class=\"row\"><div class=\"footer-col col-md-4\"><h3>Localização</h3><p>Edificio Multiempresarial<br>Renascença, São Luís-MA</p></div><div class=\"footer-col col-md-4\"><h3>Redes Sociais</h3><ul class=\"list-inline\"><li><a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-facebook\"></i></a></li><li><a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-google-plus\"></i></a></li><li><a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-twitter\"></i></a></li><li><a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-linkedin\"></i></a></li><li><a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-dribbble\"></i></a></li></ul></div><div class=\"footer-col col-md-4\"><h3>Telefone</h3><p>+55(98)3245-5332</p></div></div></div></div><div class=\"footer-below\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\">Copyright &copy; Muzik 2014</div></div></div></div></footer><div class=\"scroll-top page-scroll visible-xs visible-sm\"><a class=\"btn btn-primary\" href=\"#page-top\"><i class=\"fa fa-chevron-up\"></i></a></div><script src=\"/estatico/js/jquery.js\"></script><script src=\"/estatico/js/bootstrap.min.js\"></script><script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js\"></script><script src=\"/estatico/js/classie.js\"></script><script src=\"/estatico/js/cbpAnimatedHeader.js\"></script><script src=\"/estatico/js/remove-artista.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "119");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/muzik$1.0.0/src/app/views/artistas/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
