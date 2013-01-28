{exec, spawn} = require 'child_process'

output = (data) -> console.log data.toString()

print = (fn) ->
  (err, stdout, stderr) ->
    throw err if err
    console.log stdout, stderr
    fn?()


task 'build', 'Build and minify', ->
  exec 'coffee -c turingtype.coffee', print ->
    exec 'uglifyjs -o turingtype.min.js turingtype.js', print()


task 'watch', 'Build continuously', ->
  watcher = spawn 'coffee', ['-wc', 'turingtype.coffee']
  watcher.stdout.on 'data', output
  watcher.stderr.on 'data', output
