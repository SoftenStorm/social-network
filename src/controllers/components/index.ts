// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from './../helpers/DatabaseHelper';
import {ProjectConfigurationHelper} from './../helpers/ProjectConfigurationHelper';
import {ValidationInfo, ValidationHelper} from './../helpers/ValidationHelper';
import {RequestHelper} from './../helpers/RequestHelper';
import {RenderHelper} from './../helpers/RenderHelper';
import {SchemaHelper, DataTableSchema} from './../helpers/SchemaHelper';
import {loc} from './../helpers/LocalizationHelper';
import {Base as $Base} from './Base';

// Assign to an another one to override the base class.
// 
let Base: typeof $Base = $Base;

// <---Auto[Import]

// Import additional modules here:
//
const bcrypt = require('bcrypt');

// Auto[Declare]--->
/*enum SourceType {
  Relational,
  PrioritizedWorker,
  Document,
  VolatileMemory,
  RESTful,
  Dictionary,
  Collection
}
enum ActionType {
  Insert,
  Update,
  Upsert,
  Delete,
  Retrieve,
  Popup,
  Navigate,
  Test
}*/
// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
/*interface HierarchicalDataTable {
	source: SourceType;
	group: string;
  rows: HierarchicalDataRow[];
  notification?: string;
}
interface HierarchicalDataRow {
  keys: {[Identifier: string]: any};
  columns: {[Identifier: string]: any};
  relations: {[Identifier: string]: HierarchicalDataTable};
  division?: number[];
}
interface Input {
  target: SourceType;
  group: string;
  name: string;
  value: any;
  guid: string;
  premise: string;
  validation: ValidationInfo;
  division?: number[];
}
interface ValidationInfo {
  name: string;
  required: boolean;
  customMessage: string;
  format?: string;
  regex?: string;
}*/
// <---Auto[Interface]

// Declare or extend interfaces here:
//

// Auto[ClassBegin]--->
class Controller extends Base {
  constructor(request: Request, response: Response, template: string) {
  	super(request, response, template);
  	try {
	    let [action, schema, data] = this.initialize(request);
	    this.perform(action, schema, data);
   	} catch(error) {
	  	RenderHelper.error(response, error);
	  }
  }
  // <---Auto[ClassBegin]
  // Declare class variables and functions here:
  //
  protected validate(data: Input[]): void {
  	// The message of thrown error will be the validation message.
  	//
 		ValidationHelper.validate(data);
  }
  
  // ---------------------------------------------------------------
  // Metadata (SEO)
  // ---------------------------------------------------------------
  
  protected async accessories(data: Input[]): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve({
          title: null,
          description: null,
          keywords: null,
          language: null,
          contentType: null,
          revisitAfter: null,
          robots: null,
          linkUrl: null,
          imageUrl: null,
          itemType: null,
          contentLocale: null
        });
      } catch(error) {
        reject(error);
      }
    });
  }
  
  // ---------------------------------------------------------------
  // Example Code of Express Parameters
  // ---------------------------------------------------------------
  // 
  // Access path parameters of "/path/:a/:b" using:
  // this.request.params['a'], this.request.params['b']
  // 
  // Access query-string parameters of "/path/a/b?c=123" using:
  // this.request.query['c']
  // 
  // Access session variables "token" using:
  // this.request.session.token
  // 
  // Saving session variables "token" using:
  // this.request.session.token = 'abc';
  // this.request.session.save(() => {
  //   resolve(...);
  // });
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // Traditional HTTP Request Methods
  // ---------------------------------------------------------------
  
  protected async get(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await DatabaseHelper.retrieve(RequestHelper.createInputs({
            'collection.column': 'abc',
            'collection.column': 123,
            'collection.collection.column': null
          }), ProjectConfigurationHelper.getDataSchema().tables['collection'],
          this.request.session,   // session variables
          false,                  // real-time updates
          false                   // skip permission settings
        ));
      } catch(error) {
        reject(error);
      } */
      try {
        resolve(await super.get(data));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async post(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await DatabaseHelper.update(RequestHelper.createInputs({
            'collection.column': 'abc',
            'collection.column': 123,
            'collection.collection.column': null
          }), ProjectConfigurationHelper.getDataSchema().tables['collection'],
          false,                  // recusive upsert in sub-collection
          this.request.session,   // session variables
          false                   // skip permission settings
        ));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async put(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await DatabaseHelper.insert(RequestHelper.createInputs({
            'collection.column': 'abc',
            'collection.column': 123,
            'collection.collection.column': null
          }), ProjectConfigurationHelper.getDataSchema().tables['collection'],
          false,                  // recusive upsert in sub-collection
          this.request.session,   // session variables
          false                   // skip permission settings
        ));
      } catch(error) {
        reject(error);
      } */
      /* try {
        resolve(await DatabaseHelper.upsert(RequestHelper.createInputs({
            'collection.column': 'abc',
            'collection.column': 123,
            'collection.collection.column': null
          }), ProjectConfigurationHelper.getDataSchema().tables['collection'],
          this.request.session,   // session variables
          false                   // skip permission settings
        ));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async delete(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await DatabaseHelper.delete(RequestHelper.createInputs({
            'collection.column': 'abc',
            'collection.column': 123,
            'collection.collection.column': null
          }), ProjectConfigurationHelper.getDataSchema().tables['collection'],
          this.request.session,   // session variables
          false                   // leavePermission
        ));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  // ---------------------------------------------------------------
  // StackBlend Button Request Actions
  // ---------------------------------------------------------------
  
  protected async insert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const options = RequestHelper.getOptions(this.pageId, this.request); /* submit options */
        const name = options.name;                                           /* button name */
        
        // You may generate data and schema on the fly using:
        //
        // data = RequestHelper.createInputs({...});
        // schema = SchemaHelper.getDataTableSchemaFromNotation('collection');
        // 
        
        resolve(await DatabaseHelper.insert(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async update(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const options = RequestHelper.getOptions(this.pageId, this.request); /* submit options */
        const name = options.name;                                           /* button name */
        
        // You may generate data and schema on the fly using:
        //
        // data = RequestHelper.createInputs({...});
        // schema = SchemaHelper.getDataTableSchemaFromNotation('collection');
        // 
        
        resolve(await DatabaseHelper.update(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async upsert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const options = RequestHelper.getOptions(this.pageId, this.request); /* submit options */
        const name = options.name;                                           /* button name */
        
        // You may generate data and schema on the fly using:
        //
        // data = RequestHelper.createInputs({...});
        // schema = SchemaHelper.getDataTableSchemaFromNotation('collection');
        // 
        
        resolve(await DatabaseHelper.upsert(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async remove(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const options = RequestHelper.getOptions(this.pageId, this.request); /* submit options */
        const name = options.name;                                           /* button name */
        
        // You may generate data and schema on the fly using:
        //
        // data = RequestHelper.createInputs({...});
        // schema = SchemaHelper.getDataTableSchemaFromNotation('collection');
        // 
        
        resolve(await DatabaseHelper.delete(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async retrieve(data: Input[], schema: DataTableSchema): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      try {
        const options = RequestHelper.getOptions(this.pageId, this.request); /* submit options */
        const name = options.name;                                           /* button name */
        
        // You may generate data and schema on the fly using:
        //
        // data = RequestHelper.createInputs({...});
        // schema = SchemaHelper.getDataTableSchemaFromNotation('collection');
        // 
        
        resolve(await DatabaseHelper.retrieve(data, schema, this.request.session, options.enabledRealTimeUpdate));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async navigate(data: Input[], schema: DataTableSchema): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const options = RequestHelper.getOptions(this.pageId, this.request); /* submit options */
        const name = options.name;                                           /* button name */
        
        // You may generate data and schema on the fly using:
        //
        // data = RequestHelper.createInputs({...});
        // schema = SchemaHelper.getDataTableSchemaFromNotation('collection');
        // 
        let email, password, confirmPassword, dataset;
        
        switch (name) {
          case 'signin':
            email = data.filter(input => input.name == 'Email')[0].value;
            password = data.filter(input => input.name == 'Password')[0].value;
            
            dataset = await DatabaseHelper.retrieve(RequestHelper.createInputs({
                'User.email': email
              }), ProjectConfigurationHelper.getDataSchema().tables['User'],
              this.request.session,   // session variables
              false,                  // real-time updates
              false                   // skip permission settings
            );
            
            if (dataset['User'].rows.length == 0 ||
              bcrypt.compareSync(password, dataset['User'].rows[0].columns['password'])) throw new Error('อีเมล์และรหัสผ่านไม่ตรงกันกับที่มีในระบบ');
            
            this.request.session.uid = dataset['User'].rows[0].columns['id'];
            this.request.session.skip = !!dataset['User'].rows[0].columns['firstname'] || undefined;
            this.request.session.save(() => {
              resolve('/welcome');
            });
            break;
          case 'signup':
            email = data.filter(input => input.name == 'Email')[0].value;
            password = data.filter(input => input.name == 'Password')[0].value;
            confirmPassword = data.filter(input => input.name == 'Confirm Password')[0].value;
            
            if (password != confirmPassword) throw new Error('ต้องกรอกรหัสผ่านให้ตรงกัน');
            
            dataset = await DatabaseHelper.insert(RequestHelper.createInputs({
                'User.email': email,
                'User.password': bcrypt.hashSync(password, 10),
                'User.createdAt': new Date(),
                'User.updatedAt': new Date()
              }), ProjectConfigurationHelper.getDataSchema().tables['User'],
              false,                  // recusive upsert in sub-collection
              this.request.session,   // session variables
              false                   // skip permission settings
            );
            
            this.request.session.uid = dataset['User'].rows[0].columns['id'];
            this.request.session.save(() => {
              resolve('/welcome');
            });
            break;
        }
        
        resolve('/');
      } catch(error) {
        reject(error);
      }
    });
  }
 	
  // Auto[MergingBegin]--->  
  protected initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
  	let schema: DataTableSchema = RequestHelper.getSchema(this.pageId, request);
  	let data: Input[] = [];
  	let input: Input = null;
  	
	  // <---Auto[MergingBegin]
	  // Auto[Merging]--->
    RequestHelper.registerSubmit("index", "9bc4e00b", "navigate", ["1565c651","1b97772a","53da3716"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "signup"});
    RequestHelper.registerSubmit("index", "37c296b4", "navigate", ["1565c651","53da3716"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "signin"});
		RequestHelper.registerInput('1565c651', "document", "User", "email");
		ValidationHelper.registerInput('1565c651', "Email", false, "กรุณากรอกอีเมล์ให้ถูกต้อง", "email", null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '1565c651')) {
    
      // Override data parsing and manipulation of Email here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('53da3716', "document", "User", "password");
		ValidationHelper.registerInput('53da3716', "Password", false, "กรุณากรอกรหัสผ่านให้ถูกต้อง", "password", null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '53da3716')) {
    
      // Override data parsing and manipulation of Password here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('1b97772a', "document", "User", "password");
		ValidationHelper.registerInput('1b97772a', "Confirm Password", false, "กรุณากรอกรหัสผ่านให้ตรงกัน", "password", null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '1b97772a')) {
    
      // Override data parsing and manipulation of Confirm Password here:
      // 
      
      if (input != null) data.push(input);
    }

	  // <---Auto[Merging]
	  
	  // Auto[MergingEnd]--->
	  
  	let action: ActionType = RequestHelper.getAction(this.pageId, request);
	  return [action, schema, data];
	}
  // <---Auto[MergingEnd]
  
  // Auto[ClassEnd]--->
}
// <---Auto[ClassEnd]

// Export variables here:
//
export default Controller;

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.