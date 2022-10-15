// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.

import {SourceType} from "./DatabaseHelper";
import {Permission} from "./PermissionHelper";
import {CodeHelper} from "./CodeHelper";
import {ProjectConfigurationHelper} from "./ProjectConfigurationHelper";

enum FieldType {
  AutoNumber,
  String,
  Number,
  Boolean,
  DateTime
}

interface ForwardOptions {
	option: string;
  mode: string;
  recursive: boolean;
  forwardingTable: string;
  forwardingPrefix: string;
}
interface DataSchema {
  tables: {[Identifier: string]: DataTableSchema};
}
interface DataTableSchema {
	source: SourceType;
	group: string;
	guid: string;
  keys: {[Identifier: string]: DataColumnSchema};
  columns: {[Identifier: string]: DataColumnSchema};
  relations: {[Identifier: string]: DataRelationSchema};
  modifyingPermission: Permission;
  retrievingPermission: Permission;
  forward?: ForwardOptions;
}
interface DataColumnSchema {
	name: string;
	guid: string;
	fieldType: FieldType;
	required: boolean;
	unique: boolean;
	verb: string;
	url: string;
  modifyingPermission: Permission;
  retrievingPermission: Permission;
}
interface DataRelationSchema {
  name: string;
	guid: string;
  sourceGroup: string;
  sourceEntity: string;
  targetGroup: string;
  targetEntity: string;
}

const SchemaHelper = {
	verifyDataSchema: (data: DataSchema=ProjectConfigurationHelper.getDataSchema()) => {
	  for (const tableKey in data.tables) {
	    if (data.tables.hasOwnProperty(tableKey)) {
  	    const table = data.tables[tableKey];
  	    
  	    CodeHelper.assertOfPresent(table.group, tableKey, `There was an error verifying data schema (missing a group name: ${JSON.stringify(table)}).`);
  	    if (Object.keys(table.keys).length == 0)
  	      throw new Error(`There was an error verifying data schema (missing a primary key: ${JSON.stringify(table)}).`);
  	    
  	    if (table.modifyingPermission) SchemaHelper.verifyPermission(table.group, table.modifyingPermission);
  	    if (table.retrievingPermission) SchemaHelper.verifyPermission(table.group, table.retrievingPermission);
  	    
  	    for (const primaryKey in table.keys) {
	        if (table.keys.hasOwnProperty(primaryKey)) {
	          const column = table.keys[primaryKey];
	          
	          CodeHelper.assertOfPresent(column.name, primaryKey, `There was an error verifying data schema (missing a key name: ${JSON.stringify(column)}).`);
	          CodeHelper.assertOfPresent(column.fieldType, primaryKey, `There was an error verifying data schema (missing a kind of value: ${JSON.stringify(column)}).`);
	          CodeHelper.assertEquals(column.name, primaryKey, primaryKey, `There was an error verifying data schema (key name is mismatched: ${JSON.stringify(column)}).`);
	        	
		        if (column.modifyingPermission) SchemaHelper.verifyPermission(table.group, column.modifyingPermission);
	  	    	if (column.retrievingPermission) SchemaHelper.verifyPermission(table.group, column.retrievingPermission);
	        }
	      }
  	    for (const columnKey in table.columns) {
	        if (table.columns.hasOwnProperty(columnKey)) {
	          const column = table.columns[columnKey];

	          CodeHelper.assertOfPresent(column.name, columnKey, `There was an error verifying data schema (missing a key name: ${JSON.stringify(column)}).`);
	          CodeHelper.assertOfPresent(column.fieldType, columnKey, `There was an error verifying data schema (missing a kind of value: ${JSON.stringify(column)}).`);
	          CodeHelper.assertEquals(column.name, columnKey, columnKey, `There was an error verifying data schema (column name is mismatched: ${JSON.stringify(column)}).`);
	        	
		        if (column.modifyingPermission) SchemaHelper.verifyPermission(table.group, column.modifyingPermission);
	  	    	if (column.retrievingPermission) SchemaHelper.verifyPermission(table.group, column.retrievingPermission);
	        }
	      }
  	    
        for (const relationTableKey in table.relations) {
          if (table.relations.hasOwnProperty(relationTableKey)) {
            const relation = table.relations[relationTableKey];
            
	          CodeHelper.assertOfPresent(relation.sourceGroup, relationTableKey, `There was an error verifying data schema (missing a source group name: ${JSON.stringify(relation)}).`);
	          CodeHelper.assertOfPresent(relation.sourceEntity, relationTableKey, `There was an error verifying data schema (missing a source entity name: ${JSON.stringify(relation)}).`);
	          CodeHelper.assertOfPresent(relation.targetGroup, relationTableKey, `There was an error verifying data schema (missing a target group name: ${JSON.stringify(relation)}).`);
	          CodeHelper.assertOfPresent(relation.targetEntity, relationTableKey, `There was an error verifying data schema (missing a target entity name: ${JSON.stringify(relation)}).`);
            
	          CodeHelper.assertOfPresent(data.tables[relation.sourceGroup], relationTableKey, `There was an error verifying data schema (source group unavailable: ${JSON.stringify(relation.sourceGroup)}; choices are ${Object.keys(data.tables).join(", ")}).`);
	          CodeHelper.assertOfPresent(data.tables[relation.sourceGroup].keys[relation.sourceEntity] || data.tables[relation.sourceGroup].columns[relation.sourceEntity], relationTableKey, `There was an error verifying data schema (source entity unavailable: ${JSON.stringify(relation.sourceEntity)}; choices are ${[...Object.keys(data.tables[relation.sourceGroup].keys), ...Object.keys(data.tables[relation.sourceGroup].columns)].join(", ")}).`);
	          CodeHelper.assertOfPresent(data.tables[relation.targetGroup], relationTableKey, `There was an error verifying data schema (target group unavailable: ${JSON.stringify(relation.targetGroup)}; choices are ${Object.keys(data.tables).join(", ")}).`);
	          CodeHelper.assertOfPresent(data.tables[relation.targetGroup].keys[relation.targetEntity] || data.tables[relation.targetGroup].columns[relation.targetEntity], relationTableKey, `There was an error verifying data schema (target entity unavailable: ${JSON.stringify(relation.targetEntity)}; choices are ${[...Object.keys(data.tables[relation.targetGroup].keys), ...Object.keys(data.tables[relation.targetGroup].columns)].join(", ")}).`);
          }
        }
  	  }
	  }
	},
	verifyPermission: (group: string, permission: Permission, data: DataSchema=ProjectConfigurationHelper.getDataSchema()) => {
		CodeHelper.assertOfNotUndefined(group, 'group');
		CodeHelper.assertOfNotUndefined(permission, 'permission');
		
		if (permission == null) return true;
		
		CodeHelper.assertOfPresent(data.tables[group], 'group', `There was an error verifying data schema (target group unavailable: ${JSON.stringify(permission.relationModeSourceGroup)}; choices are ${Object.keys(data.tables).join(", ")}).`);
		
		switch (permission.mode) {
			case "relation":
				CodeHelper.assertOfPresent(permission.relationModeSourceGroup, 'permission', `There was an error verifying permission settings (missing a source group name: ${JSON.stringify(data)}).`);
				CodeHelper.assertOfPresent(permission.relationModeSourceEntity, 'permission', `There was an error verifying permission settings (missing a source entity name: ${JSON.stringify(data)}).`);
				
				CodeHelper.assertOfPresent(data.tables[permission.relationModeSourceGroup], 'permission', `There was an error verifying data schema (source group unavailable: ${JSON.stringify(permission.relationModeSourceGroup)}; choices are ${Object.keys(data.tables).join(", ")}).`);
				CodeHelper.assertOfPresent(data.tables[permission.relationModeSourceGroup].keys[permission.relationModeSourceEntity] || data.tables[permission.relationModeSourceGroup].columns[permission.relationModeSourceEntity],
					'permission', `There was an error verifying data schema (source entity unavailable: ${JSON.stringify(permission.relationModeSourceEntity)}; choices are ${[...Object.keys(data.tables[permission.relationModeSourceGroup].keys), ...Object.keys(data.tables[permission.relationModeSourceGroup].columns)].join(", ")}).`);
				
				CodeHelper.assertNotEquals(SchemaHelper.findShortestPathOfRelations(data.tables[group], data.tables[permission.relationModeSourceGroup], data).length, 0, 'permission', `There was an error verifying permission settings (no any possible path; please connect them through relations).`);
				
				switch (permission.relationMatchingMode) {
					case "session":
						CodeHelper.assertOfPresent(permission.relationMatchingSessionName, 'permission', `There was an error verifying permission settings (missing a session name: ${JSON.stringify(data)}).`);
						break;
					default:
						CodeHelper.assertOfPresent(permission.relationMatchingConstantValue, 'permission', `There was an error verifying permission settings (missing a constant value: ${JSON.stringify(data)}).`);
						break;
				}
				break;
			case "session":
				CodeHelper.assertOfPresent(permission.sessionMatchingSessionName, 'permission', `There was an error verifying permission settings (missing a session name: ${JSON.stringify(data)}).`);
				CodeHelper.assertOfPresent(permission.sessionMatchingConstantValue, 'permission', `There was an error verifying permission settings (missing a constant value: ${JSON.stringify(data)}).`);
				break;
			default:
				break;
		}
		
		return true;
	},
	verifyNotations: (tree: any, data: DataSchema=ProjectConfigurationHelper.getDataSchema()) => {
		// TODO: fix bugs.
		return true;
		
		CodeHelper.assertOfPresent(tree, 'tree');
		CodeHelper.recursiveEvaluate(tree, (obj: any) => {
			if (typeof obj !== 'object') CodeHelper.assertOfString(obj, 'children');
		});
		
	  const notations = SchemaHelper.findAllPossibleNotations(tree || {});
	  for (const notation of notations) {
	    const splited = notation.split(".");
  		let shifted: string = splited.shift();
  		let current: DataTableSchema | DataColumnSchema = null;
  		
  		do {
  		  current = SchemaHelper.getSchemaFromKey(shifted, current as DataTableSchema, data, splited.length == 0);
  		  shifted = splited.shift();
  		} while (current && shifted);
  		
  		if (current == null) throw new Error(`There was an error verifying dot notation (disconnected: ${notation}).`);
	  }
	},
	getFieldType: (value: string): FieldType => {
		CodeHelper.assertOfString(value, 'value');
		
		switch (value) {
			case "auto":
				return FieldType.AutoNumber;
			case "number":
				return FieldType.Number;
			case "boolean":
				return FieldType.Boolean;
			case "datetime":
				return FieldType.DateTime;
			default:
				return FieldType.String;
		}
	},
	getSchemaFromKey: (key: string, current: DataTableSchema, data: DataSchema=ProjectConfigurationHelper.getDataSchema(), searchForDataTableSchema: boolean=false): DataTableSchema | DataColumnSchema => {
		CodeHelper.assertOfPresent(key, 'key');
		
		if (!searchForDataTableSchema) {
			// Search DataTableSchema
			// 
			const relation = (current && current.relations || {})[key];
			const table = (data.tables || {})[key];
			
			if (relation) {
				return (data.tables || {})[relation.targetGroup] || null;
			} else if (table) {
				return table;
			} else {
				return null;
			}
		} else {
			// Search DataColumnSchema
			// 
			const column = (current && current.keys || {})[key] || (current && current.columns || {})[key];
			if (column) {
				return column;
			} else {
				return null;
			}
		}
  },
	getDataTableSchemaFromNotation: (notation: string, data: DataSchema=ProjectConfigurationHelper.getDataSchema()): DataTableSchema => {
		CodeHelper.assertOfPresent(notation, 'notation');
	  
	  if (!notation) return null;
	  
    const splited = notation.split(".");
		let shifted: string = splited.shift();
		let current: DataTableSchema | DataColumnSchema = null;
		
		do {
		  current = SchemaHelper.getSchemaFromKey(shifted, current as DataTableSchema, data, current !== null && splited.length == 0);
		  shifted = splited.shift();
		} while (current && shifted);
		
		if (current == null) throw new Error(`There was an error retreiving data schema ${notation} (invalid of dot notation).`);
		if ("fieldType" in current) throw new Error("There was an error retreiving data schema (dot notation gave a column instead of a table).");
		
		return current;
	},
  findAllPossibleNotations: (tree: any, accumulatedNotation: string=null, notations: string[]=[]): string[] => {
    for (const key in tree) {
      if (tree.hasOwnProperty(key)) {
        let currentNotation = null;
        if (accumulatedNotation == null) {
          currentNotation = key.split("[")[0];
        } else {
          currentNotation = accumulatedNotation + "." + key.split("[")[0];
        }
        if (Object.keys(tree[key]).length == 0) {
          notations.push(currentNotation);
        } else {
          SchemaHelper.findAllPossibleNotations(tree[key], currentNotation, notations);
        }
      }
    }
    
    return notations;
  },
	findShortestPathOfRelations: (from: DataTableSchema, to: DataTableSchema, data: DataSchema=ProjectConfigurationHelper.getDataSchema()): DataTableSchema[] => {
		CodeHelper.assertOfPresent(from, 'from');
		CodeHelper.assertOfPresent(to, 'to');
		
		const results = [];
		
		SchemaHelper.recursiveFindShortestPathOfRelations(from, to, results);
		
		return results;
	},
	recursiveFindShortestPathOfRelations: (from: DataTableSchema, to: DataTableSchema, results: DataTableSchema[], walked: any={}, data: DataSchema=ProjectConfigurationHelper.getDataSchema()): boolean => {
		CodeHelper.assertOfPresent(from, 'from');
		CodeHelper.assertOfPresent(to, 'to');
		CodeHelper.assertOfPresent(results, 'results');
		
		if (walked[from.group]) return false;
		walked[from.group] = true;
		
		if (from == to) {
			results.push(from);
			
			return true;
		}
		
		let minimum = Number.MAX_SAFE_INTEGER;
		let shortestResults = null;
		
		for (const key in from.relations) {
			if (from.relations.hasOwnProperty(key)) {
				const table = data.tables[key];
				const _walked = Object.assign({}, walked);
				const _results = [];
				
				if (!table) continue;
				
				const found = SchemaHelper.recursiveFindShortestPathOfRelations(table, to, _results, _walked, data);
				
				if (found && _results.length < minimum) {
					minimum = _results.length;
					shortestResults = _results;
				}
			}
		}
		
		if (shortestResults) {
			results.push(from);
			
			for (const item of shortestResults) {
				results.push(item);
			}
			
			return true;
		} else {
			return false;
		}
	}
};

export {DataSchema, DataTableSchema, DataColumnSchema, DataRelationSchema, FieldType, SchemaHelper};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.