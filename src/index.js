import * as tf from '@tensorflow/tfjs';
import {loadFrozenModel} from '@tensorflow/tfjs-converter';

const MODEL_URL = 'https://raw.githubusercontent.com/ptitzler/image-caption-model-web-artifacts/master/tensorflowjs_model.pb';
const WEIGHTS_URL = 'https://raw.githubusercontent.com/ptitzler/image-caption-model-web-artifacts/master/weights_manifest.json';

async function loadandscore(model_url, weights_url) {
	const model = await loadFrozenModel(model_url, weights_url);
	console.log('Loaded model');
	const cat = document.getElementById('testimg');
	model.execute({input: tf.fromPixels(cat)});
}

loadandscore(MODEL_URL,WEIGHTS_URL)