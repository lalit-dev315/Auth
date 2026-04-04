import NodeCache from "node-cache";

function Cache(cache) {
    this.cache = cache;
}

Cache.prototype.add = function (key, value, ttl = 0) {
    this.cache.set(key, value, ttl);
};

Cache.prototype.remove = function (key) {
    this.cache.del(key);
};

Cache.prototype.get = function (key) {
    return this.cache.get(key);
};

const cache = new Cache(new NodeCache());

export default cache;
