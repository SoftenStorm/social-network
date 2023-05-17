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
            'Post.Action.pid': null,
            'Post.Comment.pid': null,
            'Post.Comment.active': true,
            'Post.Comment.User.id': null,
            'Post.Comment.Reply.cid': null,
            'Post.Comment.Reply.active': true,
            'Post.Comment.Reply.User.id': null
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
        
        if (name == 'logout') {
          this.request.session.uid = null;
          this.request.session.save(() => {
            resolve('/');
          });
        }
        
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
    RequestHelper.registerSubmit("01e32c22", "c33d69b3", "upsert", ["036b8078","8b5b91d8","a1ce4a26","c8a316a1"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[action] fond"});
    RequestHelper.registerSubmit("01e32c22", "66766b99", "insert", ["03168663","13c65096","18091a36","382a7358","4d487443","53063929","5a318376","cd9e964b","ea9b0569"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[post] create"});
    RequestHelper.registerSubmit("01e32c22", "281067ca", "delete", ["5469cbc2"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[post] delete"});
    RequestHelper.registerSubmit("01e32c22", "cc4b29ed", "upsert", ["01e05bb0","82728a83","96cba469","b32deb04"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[action] fond"});
    RequestHelper.registerSubmit("01e32c22", "dc261964", "insert", ["063e86b6","0a824160","0e6227b3","26652008","6c7eaab2","92426ec9","b5b68759","bec0942b","c43cb8c4"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[comment] create"});
    RequestHelper.registerSubmit("01e32c22", "5d65c9a9", "delete", ["53b67855"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[comment] delete"});
    RequestHelper.registerSubmit("01e32c22", "47ebd056", "delete", ["924b8199"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[reply] delete"});
    RequestHelper.registerSubmit("01e32c22", "e0e69546", "insert", ["25ac372b","302e6b73","56a26b1d","87379be8","bc8dc2a4","ccd6346a","e976813d","ec906022"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "[reply] create"});
    RequestHelper.registerInput('8b5b91d8', "document", "Action", "uid");
    ValidationHelper.registerInput('8b5b91d8', "[action] uid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '8b5b91d8')) {
      if (input) input.value = request.session['uid'];
    
      // Override data parsing and manipulation of [action] uid here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('a1ce4a26', "document", "Action", "pid");
    ValidationHelper.registerInput('a1ce4a26', "[action] pid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'a1ce4a26')) {
    
      // Override data parsing and manipulation of [action] pid here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('036b8078', "document", "Action", "type");
    ValidationHelper.registerInput('036b8078', "[action] type", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '036b8078')) {
    
      // Override data parsing and manipulation of [action] type here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('c8a316a1', "document", "Action", "createdAt");
    ValidationHelper.registerInput('c8a316a1', "[action] createdAt", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'c8a316a1')) {
    
      // Override data parsing and manipulation of [action] createdAt here:
      // 
      input.value = new Date();
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('53063929', "document", "Post", "message");
    ValidationHelper.registerInput('53063929', "[post] message", true, "คุณลืมเขียนข้อความ", undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '53063929')) {
    
      // Override data parsing and manipulation of firstname here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('cd9e964b', "document", "Post", "isQuote");
    ValidationHelper.registerInput('cd9e964b', "[post] isQuote", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'cd9e964b')) {
    
      // Override data parsing and manipulation of [post] isQuote here:
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
      if (input) input.value = request.session['uid'];
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
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
    RequestHelper.registerInput('ea9b0569', "document", "@!Post.Comment", "pid");
    ValidationHelper.registerInput('ea9b0569', "[post] Comment.pid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'ea9b0569')) {
    
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
    RequestHelper.registerInput('01e05bb0', "document", "Action", "uid");
    ValidationHelper.registerInput('01e05bb0', "[action] uid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '01e05bb0')) {
      if (input) input.value = request.session['uid'];
    
      // Override data parsing and manipulation of [action] uid here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('b32deb04', "document", "Action", "pid");
    ValidationHelper.registerInput('b32deb04', "[action] pid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'b32deb04')) {
    
      // Override data parsing and manipulation of [action] pid here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('82728a83', "document", "Action", "type");
    ValidationHelper.registerInput('82728a83', "[action] type", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '82728a83')) {
    
      // Override data parsing and manipulation of [action] type here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('96cba469', "document", "Action", "createdAt");
    ValidationHelper.registerInput('96cba469', "[action] createdAt", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '96cba469')) {
    
      // Override data parsing and manipulation of [action] createdAt here:
      // 
      input.value = new Date();
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('bec0942b', "document", "Comment", "id");
    ValidationHelper.registerInput('bec0942b', "[comment] id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'bec0942b')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = null;
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('b5b68759', "document", "Comment", "pid");
    ValidationHelper.registerInput('b5b68759', "[comment] pid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'b5b68759')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('063e86b6', "document", "Comment", "uid");
    ValidationHelper.registerInput('063e86b6', "[comment] uid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '063e86b6')) {
      if (input) input.value = request.session['uid'];
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('26652008', "document", "@!Comment.User", "id");
    ValidationHelper.registerInput('26652008', "[comment] User.id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '26652008')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = null;
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('0a824160', "document", "@!Comment.Reply", "cid");
    ValidationHelper.registerInput('0a824160', "[comment] Reply.pid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '0a824160')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = null;
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('0e6227b3', "document", "Comment", "createdAt");
    ValidationHelper.registerInput('0e6227b3', "[comment] createdAt", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '0e6227b3')) {
    
      // Override data parsing and manipulation of createdAt here:
      // 
      input.value = new Date();
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('c43cb8c4', "document", "Comment", "updatedAt");
    ValidationHelper.registerInput('c43cb8c4', "[comment] updatedAt", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'c43cb8c4')) {
    
      // Override data parsing and manipulation of updatedAt here:
      // 
      input.value = new Date();
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('92426ec9', "document", "Comment", "active");
    ValidationHelper.registerInput('92426ec9', "[comment] active", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '92426ec9')) {
    
      // Override data parsing and manipulation of active here:
      // 
      input.value = true;
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('6c7eaab2', "document", "Comment", "message");
    ValidationHelper.registerInput('6c7eaab2', "[comment] message", true, "คุณลืมเขียนข้อความ", undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '6c7eaab2')) {
    
      // Override data parsing and manipulation of firstname here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('53b67855', "document", "Comment", "id");
    ValidationHelper.registerInput('53b67855', "[comment] id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '53b67855')) {
    
      // Override data parsing and manipulation of [comment] id here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('924b8199', "document", "Reply", "id");
    ValidationHelper.registerInput('924b8199', "[reply] id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '924b8199')) {
    
      // Override data parsing and manipulation of [reply] id here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('25ac372b', "document", "Reply", "id");
    ValidationHelper.registerInput('25ac372b', "[reply] id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '25ac372b')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = null;
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('e976813d', "document", "Reply", "cid");
    ValidationHelper.registerInput('e976813d', "[reply] cid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'e976813d')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('bc8dc2a4', "document", "Reply", "uid");
    ValidationHelper.registerInput('bc8dc2a4', "[reply] uid", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'bc8dc2a4')) {
      if (input) input.value = request.session['uid'];
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('302e6b73', "document", "@!Reply.User", "id");
    ValidationHelper.registerInput('302e6b73', "[reply] User.id", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '302e6b73')) {
    
      // Override data parsing and manipulation of Hidden 2 here:
      // 
      input.value = null;
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('ccd6346a', "document", "Reply", "createdAt");
    ValidationHelper.registerInput('ccd6346a', "[reply] createdAt", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'ccd6346a')) {
    
      // Override data parsing and manipulation of createdAt here:
      // 
      input.value = new Date();
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('56a26b1d', "document", "Reply", "updatedAt");
    ValidationHelper.registerInput('56a26b1d', "[reply] updatedAt", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '56a26b1d')) {
    
      // Override data parsing and manipulation of updatedAt here:
      // 
      input.value = new Date();
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('ec906022', "document", "Reply", "active");
    ValidationHelper.registerInput('ec906022', "[reply] active", false, undefined, undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'ec906022')) {
    
      // Override data parsing and manipulation of active here:
      // 
      input.value = true;
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('87379be8', "document", "Reply", "message");
    ValidationHelper.registerInput('87379be8', "[reply] message", true, "คุณลืมเขียนข้อความ", undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '87379be8')) {
    
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