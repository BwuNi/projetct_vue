const
    def_config = {
        type: 'GET',
        url: '',
        async: true,
        data: '',
        dataType: 'json',
        contentType: 'application/json',
        encrypt:false,
        beforeSend: function() {}
    },
    def_post_config = {
        type: "POST",
    },
    def_get_config =  {
        type: 'GET',
        data: '',
        dataType: null,
        contentType: 'text/plain'
    },
    origin = {
        prod: 'http://139.129.237.60:1102/',
        dev: 'http://127.0.0.1:1102/',
        mock: 'http://127.0.0.1:8081/'
    },
    system = {
      roadproperty:'WCKJAPI_RoadProperty/',
      operation:'WCKJAPI_Operation/',
      emergency:'WCKJAPI_Emergency/',
      def:'WCKJAPI_MD/',
      securityrisk:'WCKJAPI_SecurityRisk/',
      finance:'WCKJAPI_Finance/',
      assets:'WCKJAPI_Assets/'
    },
    env = window.globConfig ? window.globConfig.envirnment ? window.globConfig.envirnment : 'mock' : 'mock'
    
export {
    def_config,
    origin,
    system,
    env,
    def_get_config
}