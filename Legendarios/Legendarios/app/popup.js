var legendariosGenerator = {
    series: localStorage['series'],

    inicializaConfig: function()
    {
        if (this.series != undefined)
        {
            this.series = this.series.split(',');

            if (this.series.length > 0) {
                for (var i = 0; i < this.series.length; i++) {
                    this.adicionaElementoSerie(this.series[i]);
                }
            }
        }
        else
        {
            this.series = [];
        }
    },

    carregarTodasSeries: function()
    {
        $('#txtSeries').typeahead({
            name: 'series',
            prefetch: {
                url: 'http://legendas.kivson.com.br/todas',
                filter: function(data) {
                    return data.todas;
                }
            },
            limit: 5
        });
    },

    adicionaSerie: function(serie)
    {
        if (_.indexOf(this.series, serie) < 0)
        {
            this.series.push(serie);
            localStorage['series'] = this.series;

            this.adicionaElementoSerie(serie);
        }

        $('#txtSeries').val('');
    },

    adicionaElementoSerie: function(serie)
    {
        var option = document.createElement("option");
        option.value = serie;
        option.innerHTML = serie;
        document.getElementById('listaSeries').appendChild(option);
    }
};

// Gera a lista de todas quando carregar
document.addEventListener('DOMContentLoaded', function () {
    //legendariosGenerator.requestTodas();
    legendariosGenerator.carregarTodasSeries();

    legendariosGenerator.inicializaConfig();

    $('#txtSeries').bind('typeahead:selected', function (obj, datum, name) {
        legendariosGenerator.adicionaSerie(datum.value);
    });
});