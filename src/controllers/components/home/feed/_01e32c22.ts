// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../../../helpers/DatabaseHelper';
import {ProjectConfigurationHelper} from '../../../helpers/ProjectConfigurationHelper';
import {ValidationInfo, ValidationHelper} from '../../../helpers/ValidationHelper';
import {RequestHelper} from '../../../helpers/RequestHelper';
import {RenderHelper} from '../../../helpers/RenderHelper';
import {SchemaHelper, DataTableSchema} from '../../../helpers/SchemaHelper';
import {loc} from '../../../helpers/LocalizationHelper';
import {Base as $Base} from '../../Base';

// Assign to an another one to override the base class.
// 
let Base: typeof $Base = $Base;

// <---Auto[Import]

// Import additional modules here:
//

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
    if (!this.request.session.uid) {
      this.response.redirect('/');
      return;
    } else if (this.request.session.uid && !this.request.session.skip) {
      this.response.redirect('/welcome');
      return;
    }
    
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
      try {
        resolve(Object.assign({}, await DatabaseHelper.retrieve(RequestHelper.createInputs({
            'Post.active': true,
            'Post.User.id': null,
            'Post.Reply.pid': null,
            'Post.Reply.User.id': null
          }), ProjectConfigurationHelper.getDataSchema().tables['Post'],
          this.request.session,   // session variables
          true,                   // real-time updates
          false                   // skip permission settings
        ), {
          'Info': {
            source: SourceType.Collection,
          	group: 'Info',
            rows: [{
              keys: {},
              columns: {uid: this.request.session.uid},
              relations: {}
            }]
          }
        }));
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
    RequestHelper.registerSubmit("01e32c22", "66766b99", "insert", ["03168663","13c65096","18091a36","382a7358","4d487443","53063929","5a318376"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[post] create"});
    RequestHelper.registerSubmit("01e32c22", "281067ca", "delete", ["5469cbc2"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[post] delete"});
    RequestHelper.registerSubmit("01e32c22", "2d118a73", "delete", ["d8e0e5e5"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[reply] delete"});
    RequestHelper.registerSubmit("01e32c22", "1e7a237e", "insert", ["056d8987","3279b55a","44b75d96","503dd98d","5e9d4311","833bdb5e","99046765"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[reply] create"});
		RequestHelper.registerInput('53063929', "document", "Post", "message");
		ValidationHelper.registerInput('53063929', "[post] message", true, "คุณลืมเขียนข้อความ", undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '53063929')) {
    
      // Override data parsing and manipulation of firstname here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('18091a36', "document", "Post", "id");
		ValidationHelper.registerInput('18091a36', "[post] id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '18091a36')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = null;
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('13c65096', "document", "Post", "uid");
		ValidationHelper.registerInput('13c65096', "[post] uid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '13c65096')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = this.request.session.uid;
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('4d487443', "document", "@!Post.User", "id");
		ValidationHelper.registerInput('4d487443', "[post] User.id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '4d487443')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = null;
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('5a318376', "document", "Post", "createdAt");
		ValidationHelper.registerInput('5a318376', "[post] createdAt", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '5a318376')) {
    
      // Override data parsing and manipulation of createdAt here:
      // 
      input.value = new Date();
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('382a7358', "document", "Post", "updatedAt");
		ValidationHelper.registerInput('382a7358', "[post] updatedAt", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '382a7358')) {
    
      // Override data parsing and manipulation of updatedAt here:
      // 
      input.value = new Date();
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('03168663', "document", "Post", "active");
		ValidationHelper.registerInput('03168663', "[post] active", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '03168663')) {
    
      // Override data parsing and manipulation of active here:
      // 
      input.value = true;
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('5469cbc2', "document", "Post", "id");
		ValidationHelper.registerInput('5469cbc2', "[post] id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '5469cbc2')) {
    
      // Override data parsing and manipulation of [post] id here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('d8e0e5e5', "document", "Reply", "id");
		ValidationHelper.registerInput('d8e0e5e5', "[reply] id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'd8e0e5e5')) {
    
      // Override data parsing and manipulation of [reply] id here:
      // 
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('503dd98d', "document", "Reply", "id");
		ValidationHelper.registerInput('503dd98d', "[reply] id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '503dd98d')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = null;
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('44b75d96', "document", "Reply", "uid");
		ValidationHelper.registerInput('44b75d96', "[reply] uid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '44b75d96')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = this.request.session.uid;
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('3279b55a', "document", "@!Reply.User", "id");
		ValidationHelper.registerInput('3279b55a', "[reply] User.id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '3279b55a')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = null;
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('99046765', "document", "Reply", "createdAt");
		ValidationHelper.registerInput('99046765', "[reply] createdAt", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '99046765')) {
    
      // Override data parsing and manipulation of createdAt here:
      // 
      input.value = new Date();
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('5e9d4311', "document", "Reply", "updatedAt");
		ValidationHelper.registerInput('5e9d4311', "[reply] updatedAt", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '5e9d4311')) {
    
      // Override data parsing and manipulation of updatedAt here:
      // 
      input.value = new Date();
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('833bdb5e', "document", "Reply", "active");
		ValidationHelper.registerInput('833bdb5e', "[reply] active", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '833bdb5e')) {
    
      // Override data parsing and manipulation of active here:
      // 
      input.value = true;
      
      if (input != null) data.push(input);
    }
		RequestHelper.registerInput('056d8987', "document", "Reply", "message");
		ValidationHelper.registerInput('056d8987', "[reply] message", true, "คุณลืมเขียนข้อความ", undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '056d8987')) {
    
      // Override data parsing and manipulation of firstname here:
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