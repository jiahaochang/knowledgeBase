"use strict";

import {isDebug} from "../commonVar";
import {hasKeyInMap} from "../commonFunc";

class BiMap {
    private delegate = {};
    private inverseMap = {};

    private setDelegate(d){
        this.delegate = d;
    }
    private setInverse(i){
        this.inverseMap = i;
    }

    put(k:string, v:string): BiMap{
        //todo
       /* if(hasKeyInMap(v, this.inverseMap)){
            if (isDebug()){
                console.log("duplicate for the same value : " + v)
            }
        }*/

        this.delegate[k] = v;
        this.inverseMap[v] = k;
        return this;
    };

    get(k:string): string{
        return this.delegate[k];
    }

    contains(k:string): boolean {
        return hasKeyInMap(k, this.delegate);
    }

    inverse(): BiMap {
        let inversedBiMap = new BiMap();
        inversedBiMap.setDelegate(this.inverseMap);
        inversedBiMap.setInverse(this.delegate);
        return inversedBiMap;
    }
}

export = BiMap
