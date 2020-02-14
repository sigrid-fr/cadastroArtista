// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/muzik$1.0.0/src/app/views/base/erros/500.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><title>Error</title><link href=\"/estatico/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\"><link href=\"/estatico/bootstrap/css/style.css\" rel=\"stylesheet\"><link href=\"/estatico/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"http://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\"><link href=\"http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic\" rel=\"stylesheet\" type=\"text/css\"><!--[if lt IE 9]>\n        <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n        <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\n    <![endif]--></head><body id=\"page-top\" class=\"index\">");

  component_globals_tag({}, out);

  out.w("<header><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><img class=\"img-responsive\" src=\"/estatico/img/header/404.png\" alt=\"\"></div></div></div></header><section id=\"album\"><div class=\"container\"><div class=\"row\"><main class=\"conteudoPrincipal\"><h1>Opss!</h1> <p>Houve um problema. Tente mais tarde.</p><a href=\"/\">Voltar</a></main></div></div></section><footer class=\"text-center\"><div class=\"footer-above\"><div class=\"container\"><div class=\"row\"><div class=\"footer-col col-md-4\"><h3>Localização</h3><p>Edificio Multiempresarial<br>Renascença, São Luís-MA</p></div><div class=\"footer-col col-md-4\"><h3>Redes Sociais</h3><ul class=\"list-inline\"><li><a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-facebook\"></i></a></li><li><a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-google-plus\"></i></a></li><li><a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-twitter\"></i></a></li><li><a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-linkedin\"></i></a></li><li><a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-dribbble\"></i></a></li></ul></div><div class=\"footer-col col-md-4\"><h3>Telefone</h3><p>+55(98)3245-5332</p></div></div></div></div><div class=\"footer-below\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\">Copyright &copy; Muzik 2014</div></div></div></div></footer><div class=\"scroll-top page-scroll visible-xs visible-sm\"><a class=\"btn btn-primary\" href=\"#page-top\"><i class=\"fa fa-chevron-up\"></i></a></div><script src=\"/estatico/js/jquery.js\"></script><script src=\"/estatico/js/bootstrap.min.js\"></script><script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js\"></script><script src=\"/estatico/js/classie.js\"></script><script src=\"/estatico/js/cbpAnimatedHeader.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "67");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/muzik$1.0.0/src/app/views/base/erros/500.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
