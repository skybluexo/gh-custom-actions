const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

const s3 = new aws.S3();

function run() {
    core.notice('Hello from my custo JavaScript Action!')
}

run();