rand = Math.random
{floor} = Math

class window.TuringType

  int: 100
  accuracy: .95
  keys: 'qwertyuiop[]asdfghjklzxcvbnm,./;-='.split ''

  constructor: (@el, @text, @options = {}) ->
    @len = @text.length
    @i = 0
    {accuracy, interval, @callback} = @options
    @accuracy = accuracy ? @accuracy
    @int = interval ? @int
    if tag = @el.tagName.toLowerCase() is 'textarea' or tag is 'input'
      @attr = 'value'
      @el.focus()
    else
      @attr = 'innerText'
    @type()


  type: =>
    return @callback?() if @i is @len
    if rand() > @accuracy
      @el[@attr] += @keys[floor rand() * @keys.length]
      @timer = setTimeout =>
        @el[@attr] = @text.slice 0, @i
        @timer = setTimeout @type, rand() * @int + @int * .8
      , @int * 1.5
    else
      @el[@attr] += @text[@i++]
      @timer = setTimeout @type, do =>
        t = rand() * @int + @int * .1
        t += rand() * @int if @text[@i] is ' '
        t += rand() * @int * 3 if @text[@i] is '.' or @text[@i] is ','
        t += @int * 2 if rand() > .97
        t += @int if rand() > .95
        t


  pause: ->
    clearTimeout @timer
    @el[@attr]
