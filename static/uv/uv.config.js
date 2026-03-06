self.__uv$config = {
    prefix: '/static/tiw/',
    bare: 'https://bare.benrogo.net',
    encodeUrl: ultraviolet.codec.xor.encode,
    decodeUrl: ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
