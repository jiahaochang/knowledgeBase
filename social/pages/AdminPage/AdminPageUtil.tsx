
export const ALL = "全部"
export const GRADEALL = "gradeAll"
export const CLASSALL = "classAll"
export function changeClassMapGradeIDBeKey(data){
    var classMap ={};
    for(var i=0;i<data.length;i++){
        var classAll = [];
        if(data[i].gradeName!=ALL){
            classAll = [{classID:CLASSALL,className:ALL,classShortName:ALL}]
        }
        classMap[data[i].grade] = classAll.concat(data[i].classes) ;
    }
    return classMap;
}