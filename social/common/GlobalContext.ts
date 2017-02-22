
"use strict"
var storeGlobal;
export function initStoreGlobal(store){
    storeGlobal = store;
}
export function getStoreGlobal(){
    return storeGlobal;
}

var availChosenSubjs;

export function getAvailChosenSubjs(){
	return availChosenSubjs;
}
export function setAvailChosenSubjs(availSubjs){
	availChosenSubjs = availSubjs;
}

var subjectNameDisplayMap;

export function setSubjectNameDisplayMap(nameDisplayMap){
	subjectNameDisplayMap = nameDisplayMap;
}
export function getSubjectNameDisplayMap(){
	return subjectNameDisplayMap;
}

var systemInfo;
export function getSystemInfo(){
	return systemInfo;
}
export function setSystemInfo(info){
	systemInfo = info;
}

var shownSystems;
export function getShownSystems(){
	return shownSystems;
}
export function setShownSystems(systems){
	shownSystems = systems;
}

var defaultSystem;
export function getDefaultSystem(){
	return defaultSystem;
}
export function setDefaultSystem(system){
	defaultSystem = system;
}

var qqFace;
export function setQQFace(qq){
	qqFace = qq;
}
export function getQQFace(){
	return qqFace;
}

var termOptions ;
export function setTermOptions(options){
	termOptions = options;
}
export function getTermOptions(){
	return termOptions;
}

export * from './GlobalContext'
