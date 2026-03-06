self.__uv$config = {
    prefix: '/tiw/',
    bare: 'https://bare.benrogo.net',
    encodeUrl: ultraviolet.codec.xor.encode,
    decodeUrl: ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
