import React from 'react';
import featureFlag from '../feature-flag';

export function generateComponent(component){
    let foundComponent = {};
    for(var i = 0; i < featureFlag.components.length; i++){   
        if(featureFlag.components[i][component.type.name]){
            foundComponent = featureFlag.components[i][component.type.name];
            break;
        }
    }
    if(foundComponent.render){
        return component
    }
}