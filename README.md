jquery-vcrumbs
==============

Use vcrumbs JQuery plugin to dynamically add breadcrumbs to your webpage. No need of any server-side scripting. Just initialize vcrumbs with a unique keyword and the rest will be taken care of by the plugin. vcrumbs allows you to configure custom titles and link separators.

##Installation

Include script after the jquery-cookie library (https://github.com/carhartl/jquery-cookie)

```ruby
<script src="jquery.vcrumbs.js"></script>
```

##Usage

Default Initialization:

```ruby
$('element').vcrumbs({
  		'key' : 'pageid'
		});
```

Custom Link Separator:

```ruby
$('element').vcrumbs({
    	'key' : 'pageid',
      'separator': '>>'
		});
```

Custom Link Title

```ruby
$('element').vcrumbs({
      'key' : 'pageid',
      'title': 'Custom Title'
		});
```

Make last label a clickable link

```ruby
$('element').vcrumbs({
      'key' : 'pageid',
      'islastlink': true
	});
```


##Options

```ruby
'key' : 'unqiue_key'
```

This option is mandatory. It is used to uniquely identify the webpage.

```ruby
'separator' : '>>'
```

Default: ``` '>' ```

Optional. Sets a separator between the breadcrumbs

```ruby
'title' : 'Some Title'
```

Default: ``` Text defined in the <TITLE> tag of current webpage ```

Optional. Sets this value as the link title in breadcrumbs

```ruby
'islastlink' : true
```

Default: ``` false ```

Optional. If set to true, makes the last label of breadcrumbs a link
