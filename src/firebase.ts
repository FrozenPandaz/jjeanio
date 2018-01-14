import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import 'firebase/firestore';

import { getApp } from './server.app';

import { enableProdMode } from '@angular/core';

enableProdMode();

const app = getApp();

exports.server = functions.https.onRequest(app);
