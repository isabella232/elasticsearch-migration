"use strict";

function Warmers(index) {

  return es
    .get('/' + index + '/_warmers')

    .then(
      function(r) {
        var warmers = _.keys(r[index].warmers);
        return log
          .result(
            'blue',
            'Warmers removed',
            warmers,
            'https://www.elastic.co/guide/en/elasticsearch/reference/master/breaking_50_index_apis.html#_warmers')
      });

};
