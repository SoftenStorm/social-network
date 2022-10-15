import {SchemaHelper} from "../../../../src/controllers/helpers/SchemaHelper";
import {ProjectConfigurationHelper} from "../../../../src/controllers/helpers/ProjectConfigurationHelper";
import {CodeHelper} from "../../../../src/controllers/helpers/CodeHelper";

const fs = require('fs');
const path = require('path');
const unlabel = fs.readFileSync(path.resolve(__dirname, '../files/unlabel.stackblend'), {encoding:'utf8', flag:'r'});
	
describe('Verification', () => {
	describe('Table', () => {
	  test('base', () => {
		  let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
		
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).not.toThrow();
		});
		test('missing a group name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].group = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].group = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].group = undefined;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Note'].group = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('missing a primary key', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].keys = {};
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].keys['id'] = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Note'].keys = {};
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('missing a key name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].keys['id'].name = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].keys['id'].name = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].keys['id'].name = undefined;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Note'].keys['eid'].name = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('missing a column name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].columns['message'].name = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].columns['message'].name = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].columns['message'].name = undefined;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Note'].columns['note'].name = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('missing a kind of value', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].keys['id'].fieldType = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].keys['id'].fieldType = undefined;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].columns['message'].fieldType = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].columns['message'].fieldType = undefined;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Note'].keys['eid'].fieldType = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('wrong of key name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].keys['id'].name = 'id2';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Note'].keys['eid'].name = 'eid2';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('wrong of column name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].columns['message'].name = 'message2';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Note'].columns['note'].name = 'note2';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
	});
	describe('Relation', () => {
		test('base', () => {
		  let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
		
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).not.toThrow();
		});
		test('missing a source group name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].relations['User'].sourceGroup = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].relations['User'].sourceGroup = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].relations['User'].sourceGroup = undefined;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Business'].relations['User'].sourceGroup = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('missing a source entity name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].relations['User'].sourceEntity = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].relations['User'].sourceEntity = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].relations['User'].sourceEntity = undefined;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Business'].relations['User'].sourceEntity = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('missing a target group name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].relations['User'].targetGroup = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].relations['User'].targetGroup = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].relations['User'].targetGroup = undefined;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Business'].relations['User'].targetGroup = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('missing a target entity name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].relations['User'].targetEntity = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].relations['User'].targetEntity = null;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1.tables['Log'].relations['User'].targetEntity = undefined;
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Business'].relations['User'].targetEntity = '';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('wrong of source group name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].relations['User'].sourceGroup = '123';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Business'].relations['User'].sourceGroup = '123';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('wrong of source entity name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].relations['User'].sourceEntity = '123';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Business'].relations['User'].sourceEntity = '123';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('wrong of target group name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].relations['User'].targetGroup = '123';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Business'].relations['User'].targetGroup = '123';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('wrong of target entity name', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Log'].relations['User'].targetEntity = '123';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
			
			data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			data1.tables['Business'].relations['User'].targetEntity = '123';
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		/* test('source group unavailable', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			// For any non-referenceable
			
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('source entity unavailable', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			// For any non-referenceable
			
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('target group unavailable', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			// For any non-referenceable
			
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		});
		test('target entity unavailable', () => {
			let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
			
			// For any non-referenceable
			
			expect(() => { SchemaHelper.verifyDataSchema(data1); }).toThrow();
		}); */
	});
	describe('Permission', () => {
		describe('Relation', () => {
			test('base', () => {
			  let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Log'].modifyingPermission = {
					mode: null, /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).not.toThrow();
				
				data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'always', /* null, always, relation, session */ /* <======== */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).not.toThrow();
				
				data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Log'].retrievingPermission = { /* <======== */
					mode: 'always', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].retrievingPermission, data1); }).not.toThrow();
				
				expect(() => { SchemaHelper.verifyPermission('', data1.tables['Log'].retrievingPermission, data1); }).toThrow();
				expect(() => { SchemaHelper.verifyPermission(null, data1.tables['Log'].retrievingPermission, data1); }).toThrow();
				expect(() => { SchemaHelper.verifyPermission('Log1', data1.tables['Log'].retrievingPermission, data1); }).toThrow();
			});
			test('missing a source group name', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'uid',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: '', /* <======== */
				  relationModeSourceEntity: 'uid',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: null, /* <======== */
				  relationModeSourceEntity: 'uid',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: undefined, /* <======== */
				  relationModeSourceEntity: 'uid',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: null, /* null, always, relation, session */ /* <======== */
				  relationModeSourceGroup: undefined, /* <======== */
				  relationModeSourceEntity: 'uid',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).not.toThrow();
			});
			test('missing a source entity name', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'uid',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: '', /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: null, /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: undefined, /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: null, /* null, always, relation, session */ /* <======== */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: undefined, /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).not.toThrow();
			});
			test('wrong of source group name', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'uid',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User1', /* <======== */
				  relationModeSourceEntity: 'uid',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: null, /* null, always, relation, session */ /* <======== */
				  relationModeSourceGroup: 'User1', /* <======== */
				  relationModeSourceEntity: 'uid',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).not.toThrow();
			});
			test('wrong of source entity name', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'uid',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id1', /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Log'].modifyingPermission = {
					mode: null, /* null, always, relation, session */ /* <======== */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id1', /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Log', data1.tables['Log'].modifyingPermission, data1); }).not.toThrow();
			});
			test('source group unavailable', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User', /* <======== */
				  relationModeSourceEntity: 'bid', /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'Log', /* <======== */
				  relationModeSourceEntity: 'uid', /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'RESTfulTesting', /* <======== */
				  relationModeSourceEntity: 'put', /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'Business', /* <======== */
				  relationModeSourceEntity: 'bid', /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
			});
			test('source entity unavailable', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'email', /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'Log',
				  relationModeSourceEntity: 'message', /* <======== */
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
			});
			test('missing a session name', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: '', /* <======== */
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: null, /* <======== */
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: undefined, /* <======== */
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
			});
			test('missing a constant value', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '', /* <======== */
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: null, /* <======== */
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: undefined, /* <======== */
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
			});
			test('wrong of session name', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: '123uid', /* <======== */
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: '+uid', /* <======== */
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: '+', /* <======== */
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'relation', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: 'session', /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: '*()_', /* <======== */
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
			});
		});
		describe('Session', () => {
			test('missing a session name', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: '1uid', /* <======== */
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: '-', /* <======== */
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: '!id', /* <======== */
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: '!@#$%^', /* <======== */
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
			});
			test('wrong of session name', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: '1uid', /* <======== */
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: '-', /* <======== */
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: '!id', /* <======== */
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: '!@#$%^', /* <======== */
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
			});
			test('missing a constant value', () => {
				let data1 = {tables: ProjectConfigurationHelper.convertToSchema(JSON.parse(unlabel).flows.schema)};
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '123'
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: '' /* <======== */
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).not.toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: null /* <======== */
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
				
				data1.tables['Business'].modifyingPermission = {
					mode: 'session', /* null, always, relation, session */
				  relationModeSourceGroup: 'User',
				  relationModeSourceEntity: 'id',
				  relationMatchingMode: null, /* null = static, session */
				  relationMatchingConstantValue: '123',
				  relationMatchingSessionName: 'uid',
				  sessionMatchingSessionName: 'uid',
				  sessionMatchingConstantValue: undefined /* <======== */
				};
				
				expect(() => { SchemaHelper.verifyPermission('Business', data1.tables['Business'].modifyingPermission, data1); }).toThrow();
			});
		});
	});
});

describe('Searching Information', () => {
	test('Undefined', () => {
		
	});
});

describe('Retrieving Information', () => {
	test('Undefined', () => {
		
	});
});