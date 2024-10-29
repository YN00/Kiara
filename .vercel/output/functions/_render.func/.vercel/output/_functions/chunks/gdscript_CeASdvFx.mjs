const lang = Object.freeze(JSON.parse("{\"displayName\":\"GDScript\",\"fileTypes\":[\"gd\"],\"name\":\"gdscript\",\"patterns\":[{\"include\":\"#statement\"},{\"include\":\"#expression\"}],\"repository\":{\"annotated_parameter\":{\"begin\":\"\\\\s*([a-zA-Z_]\\\\w*)\\\\s*(:)\\\\s*([a-zA-Z_]\\\\w*)?\",\"beginCaptures\":{\"1\":{\"name\":\"variable.parameter.function.language.gdscript\"},\"2\":{\"name\":\"punctuation.separator.annotation.gdscript\"},\"3\":{\"name\":\"entity.name.type.class.gdscript\"}},\"end\":\"(,)|(?=\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.separator.parameters.gdscript\"}},\"patterns\":[{\"include\":\"#base_expression\"},{\"match\":\"=(?!=)\",\"name\":\"keyword.operator.assignment.gdscript\"}]},\"annotations\":{\"captures\":{\"1\":{\"name\":\"entity.name.function.decorator.gdscript\"},\"2\":{\"name\":\"entity.name.function.decorator.gdscript\"}},\"match\":\"(@)(export|export_color_no_alpha|export_custom|export_dir|export_enum|export_exp_easing|export_file|export_flags|export_flags_2d_navigation|export_flags_2d_physics|export_flags_2d_render|export_flags_3d_navigation|export_flags_3d_physics|export_flags_3d_render|export_global_dir|export_global_file|export_multiline|export_node_path|export_placeholder|export_range|export_storage|icon|onready|rpc|tool|warning_ignore|abstract|static_unload)\\\\b\"},\"any_method\":{\"match\":\"\\\\b([A-Za-z_]\\\\w*)\\\\b(?=\\\\s*(?:[(]))\",\"name\":\"entity.name.function.other.gdscript\"},\"any_property\":{\"captures\":{\"1\":{\"name\":\"punctuation.accessor.gdscript\"},\"2\":{\"name\":\"constant.language.gdscript\"},\"3\":{\"name\":\"variable.other.property.gdscript\"}},\"match\":\"\\\\b(\\\\.)\\\\s*(?<![@$#%])(?:([A-Z_][A-Z_0-9]*)|([A-Za-z_]\\\\w*))\\\\b(?![(])\"},\"any_variable\":{\"match\":\"\\\\b(?<![@$#%])([A-Za-z_]\\\\w*)\\\\b(?![(])\",\"name\":\"variable.other.gdscript\"},\"arithmetic_operator\":{\"match\":\"->|\\\\+=|-=|\\\\*=|\\\\^=|/=|%=|&=|~=|\\\\|=|\\\\*\\\\*|\\\\*|/|%|\\\\+|-\",\"name\":\"keyword.operator.arithmetic.gdscript\"},\"assignment_operator\":{\"match\":\"=\",\"name\":\"keyword.operator.assignment.gdscript\"},\"base_expression\":{\"patterns\":[{\"include\":\"#builtin_get_node_shorthand\"},{\"include\":\"#nodepath_object\"},{\"include\":\"#nodepath_function\"},{\"include\":\"#strings\"},{\"include\":\"#builtin_classes\"},{\"include\":\"#const_vars\"},{\"include\":\"#keywords\"},{\"include\":\"#operators\"},{\"include\":\"#lambda_declaration\"},{\"include\":\"#class_declaration\"},{\"include\":\"#variable_declaration\"},{\"include\":\"#signal_declaration_bare\"},{\"include\":\"#signal_declaration\"},{\"include\":\"#function_declaration\"},{\"include\":\"#statement_keyword\"},{\"include\":\"#assignment_operator\"},{\"include\":\"#in_keyword\"},{\"include\":\"#control_flow\"},{\"include\":\"#match_keyword\"},{\"include\":\"#curly_braces\"},{\"include\":\"#square_braces\"},{\"include\":\"#round_braces\"},{\"include\":\"#function_call\"},{\"include\":\"#comment\"},{\"include\":\"#self\"},{\"include\":\"#func\"},{\"include\":\"#letter\"},{\"include\":\"#numbers\"},{\"include\":\"#pascal_case_class\"},{\"include\":\"#line_continuation\"}]},\"bitwise_operator\":{\"match\":\"&|\\\\||<<=|>>=|<<|>>|\\\\^|~\",\"name\":\"keyword.operator.bitwise.gdscript\"},\"boolean_operator\":{\"match\":\"(&&|\\\\|\\\\|)\",\"name\":\"keyword.operator.boolean.gdscript\"},\"builtin_classes\":{\"match\":\"(?<![^.]\\\\.|:)\\\\b(Vector2|Vector2i|Vector3|Vector3i|Vector4|Vector4i|Color|Rect2|Rect2i|Array|Basis|Dictionary|Plane|Quat|RID|Rect3|Transform|Transform2D|Transform3D|AABB|String|Color|NodePath|PoolByteArray|PoolIntArray|PoolRealArray|PoolStringArray|PoolVector2Array|PoolVector3Array|PoolColorArray|bool|int|float|Signal|Callable|StringName|Quaternion|Projection|PackedByteArray|PackedInt32Array|PackedInt64Array|PackedFloat32Array|PackedFloat64Array|PackedStringArray|PackedVector2Array|PackedVector2iArray|PackedVector3Array|PackedVector3iArray|PackedVector4Array|PackedColorArray|super)\\\\b\",\"name\":\"entity.name.type.class.builtin.gdscript\"},\"builtin_get_node_shorthand\":{\"patterns\":[{\"include\":\"#builtin_get_node_shorthand_quoted\"},{\"include\":\"#builtin_get_node_shorthand_bare\"},{\"include\":\"#builtin_get_node_shorthand_bare_multi\"}]},\"builtin_get_node_shorthand_bare\":{\"captures\":{\"1\":{\"name\":\"keyword.control.flow.gdscript\"},\"2\":{\"name\":\"constant.character.escape.gdscript\"},\"3\":{\"name\":\"constant.character.escape.gdscript\"},\"4\":{\"name\":\"constant.character.escape.gdscript\"}},\"match\":\"(?<!/\\\\s*)(\\\\$\\\\s*|%|\\\\$%\\\\s*)(/\\\\s*)?([a-zA-Z_]\\\\w*)\\\\b(?!\\\\s*/)\",\"name\":\"meta.literal.nodepath.bare.gdscript\"},\"builtin_get_node_shorthand_bare_multi\":{\"begin\":\"(\\\\$\\\\s*|%|\\\\$%\\\\s*)(/\\\\s*)?([a-zA-Z_]\\\\w*)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.flow.gdscript\"},\"2\":{\"name\":\"constant.character.escape.gdscript\"},\"3\":{\"name\":\"constant.character.escape.gdscript\"}},\"end\":\"(?!\\\\s*/\\\\s*%?\\\\s*[a-zA-Z_]\\\\w*)\",\"name\":\"meta.literal.nodepath.bare.gdscript\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"constant.character.escape.gdscript\"},\"2\":{\"name\":\"keyword.control.flow.gdscript\"},\"3\":{\"name\":\"constant.character.escape.gdscript\"}},\"match\":\"(/)\\\\s*(%)?\\\\s*([a-zA-Z_]\\\\w*)\\\\s*\"}]},\"builtin_get_node_shorthand_quoted\":{\"begin\":\"(?:(\\\\$)|(&|\\\\^|@))(\\\"|')\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.control.flow.gdscript\"},\"2\":{\"name\":\"variable.other.enummember.gdscript\"}},\"end\":\"(\\\\3)\",\"name\":\"string.quoted.gdscript meta.literal.nodepath.gdscript constant.character.escape.gdscript\",\"patterns\":[{\"match\":\"%\",\"name\":\"keyword.control.flow\"}]},\"class_declaration\":{\"captures\":{\"1\":{\"name\":\"entity.name.type.class.gdscript\"},\"2\":{\"name\":\"class.other.gdscript\"}},\"match\":\"(?<=^class)\\\\s+([a-zA-Z_]\\\\w*)\\\\s*(?=:)\"},\"class_enum\":{\"captures\":{\"1\":{\"name\":\"entity.name.type.class.gdscript\"},\"2\":{\"name\":\"variable.other.enummember.gdscript\"}},\"match\":\"\\\\b([A-Z][a-zA-Z_0-9]*)\\\\.([A-Z_0-9]+)\"},\"class_is\":{\"captures\":{\"1\":{\"name\":\"storage.type.is.gdscript\"},\"2\":{\"name\":\"entity.name.type.class.gdscript\"}},\"match\":\"\\\\s+(is)\\\\s+([a-zA-Z_]\\\\w*)\"},\"class_name\":{\"captures\":{\"1\":{\"name\":\"entity.name.type.class.gdscript\"},\"2\":{\"name\":\"class.other.gdscript\"}},\"match\":\"(?<=class_name)\\\\s+([a-zA-Z_]\\\\w*(\\\\.([a-zA-Z_]\\\\w*))?)\"},\"class_new\":{\"captures\":{\"1\":{\"name\":\"entity.name.type.class.gdscript\"},\"2\":{\"name\":\"storage.type.new.gdscript\"},\"3\":{\"name\":\"punctuation.parenthesis.begin.gdscript\"}},\"match\":\"\\\\b([a-zA-Z_]\\\\w*).(new)\\\\(\"},\"comment\":{\"captures\":{\"1\":{\"name\":\"punctuation.definition.comment.number-sign.gdscript\"}},\"match\":\"(##|#).*$\\\\n?\",\"name\":\"comment.line.number-sign.gdscript\"},\"compare_operator\":{\"match\":\"<=|>=|==|<|>|!=|!\",\"name\":\"keyword.operator.comparison.gdscript\"},\"const_vars\":{\"match\":\"\\\\b([A-Z_][A-Z_0-9]*)\\\\b\",\"name\":\"variable.other.constant.gdscript\"},\"control_flow\":{\"match\":\"\\\\b(?:if|elif|else|while|break|continue|pass|return|when|yield|await)\\\\b\",\"name\":\"keyword.control.gdscript\"},\"curly_braces\":{\"begin\":\"\\\\{\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.dict.begin.gdscript\"}},\"end\":\"\\\\}\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.dict.end.gdscript\"}},\"patterns\":[{\"include\":\"#base_expression\"},{\"include\":\"#any_variable\"}]},\"expression\":{\"patterns\":[{\"include\":\"#base_expression\"},{\"include\":\"#getter_setter_godot4\"},{\"include\":\"#assignment_operator\"},{\"include\":\"#annotations\"},{\"include\":\"#class_name\"},{\"include\":\"#builtin_classes\"},{\"include\":\"#class_new\"},{\"include\":\"#class_is\"},{\"include\":\"#class_enum\"},{\"include\":\"#any_method\"},{\"include\":\"#any_variable\"},{\"include\":\"#any_property\"}]},\"extends_statement\":{\"captures\":{\"1\":{\"name\":\"keyword.language.gdscript\"},\"2\":{\"name\":\"entity.other.inherited-class.gdscript\"}},\"match\":\"(extends)\\\\s+([a-zA-Z_]\\\\w*\\\\.[a-zA-Z_]\\\\w*)?\"},\"func\":{\"match\":\"\\\\bfunc\\\\b\",\"name\":\"keyword.language.gdscript\"},\"function_arguments\":{\"begin\":\"(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.arguments.begin.gdscript\"}},\"contentName\":\"meta.function.parameters.gdscript\",\"end\":\"(?=\\\\))(?!\\\\)\\\\s*\\\\()\",\"patterns\":[{\"match\":\"(,)\",\"name\":\"punctuation.separator.arguments.gdscript\"},{\"captures\":{\"1\":{\"name\":\"variable.parameter.function-call.gdscript\"},\"2\":{\"name\":\"keyword.operator.assignment.gdscript\"}},\"match\":\"\\\\b([a-zA-Z_]\\\\w*)\\\\s*(=)(?!=)\"},{\"match\":\"=(?!=)\",\"name\":\"keyword.operator.assignment.gdscript\"},{\"include\":\"#base_expression\"},{\"captures\":{\"1\":{\"name\":\"punctuation.definition.arguments.end.gdscript\"},\"2\":{\"name\":\"punctuation.definition.arguments.begin.gdscript\"}},\"match\":\"\\\\s*(\\\\))\\\\s*(\\\\()\"},{\"include\":\"#letter\"},{\"include\":\"#any_variable\"},{\"include\":\"#any_property\"},{\"include\":\"#keywords\"}]},\"function_call\":{\"begin\":\"(?=\\\\b[a-zA-Z_]\\\\w*\\\\b\\\\()\",\"comment\":\"Regular function call of the type \\\"name(args)\\\"\",\"end\":\"(\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.arguments.end.gdscript\"}},\"name\":\"meta.function-call.gdscript\",\"patterns\":[{\"include\":\"#function_name\"},{\"include\":\"#function_arguments\"}]},\"function_declaration\":{\"begin\":\"\\\\s*(func)\\\\s+([a-zA-Z_]\\\\w*)\\\\s*(?=\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.language.gdscript storage.type.function.gdscript\"},\"2\":{\"name\":\"entity.name.function.gdscript\"}},\"end\":\"(:|(?=[#'\\\"\\\\n]))\",\"end2\":\"(\\\\s*(\\\\-\\\\>)\\\\s*(void\\\\w*)|([a-zA-Z_]\\\\w*)\\\\s*\\\\:)\",\"endCaptures2\":{\"1\":{\"name\":\"punctuation.separator.annotation.result.gdscript\"},\"2\":{\"name\":\"keyword.language.void.gdscript\"},\"3\":{\"name\":\"entity.name.type.class.gdscript markup.italic\"}},\"name\":\"meta.function.gdscript\",\"patterns\":[{\"include\":\"#parameters\"},{\"include\":\"#line_continuation\"},{\"include\":\"#base_expression\"}]},\"function_name\":{\"patterns\":[{\"include\":\"#builtin_classes\"},{\"match\":\"\\\\b(preload)\\\\b\",\"name\":\"keyword.language.gdscript\"},{\"comment\":\"Some color schemas support meta.function-call.generic scope\",\"match\":\"\\\\b([a-zA-Z_]\\\\w*)\\\\b\",\"name\":\"entity.name.function.gdscript\"}]},\"getter_setter_godot4\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"entity.name.function.gdscript\"}},\"match\":\"\\\\b(get):\"},{\"begin\":\"\\\\s+(set)\\\\s*(?=\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.gdscript\"}},\"end\":\"(:|(?=[#'\\\"\\\\n]))\",\"name\":\"meta.function.gdscript\",\"patterns\":[{\"include\":\"#parameters\"},{\"include\":\"#line_continuation\"}]}]},\"in_keyword\":{\"patterns\":[{\"begin\":\"\\\\b(for)\\\\b\",\"captures\":{\"1\":{\"name\":\"keyword.control.gdscript\"}},\"end\":\":\",\"patterns\":[{\"match\":\"\\\\bin\\\\b\",\"name\":\"keyword.control.gdscript\"},{\"include\":\"#base_expression\"},{\"include\":\"#any_variable\"},{\"include\":\"#any_property\"}]},{\"match\":\"\\\\bin\\\\b\",\"name\":\"keyword.operator.wordlike.gdscript\"}]},\"keywords\":{\"match\":\"\\\\b(?:class|class_name|is|onready|tool|static|export|as|void|enum|assert|breakpoint|sync|remote|master|puppet|slave|remotesync|mastersync|puppetsync|trait|namespace)\\\\b\",\"name\":\"keyword.language.gdscript\"},\"lambda_declaration\":{\"begin\":\"(func)\\\\s?(?=\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.language.gdscript storage.type.function.gdscript\"},\"2\":{\"name\":\"entity.name.function.gdscript\"}},\"end\":\"(:|(?=[#'\\\"\\\\n]))\",\"end2\":\"(\\\\s*(\\\\-\\\\>)\\\\s*(void\\\\w*)|([a-zA-Z_]\\\\w*)\\\\s*\\\\:)\",\"endCaptures2\":{\"1\":{\"name\":\"punctuation.separator.annotation.result.gdscript\"},\"2\":{\"name\":\"keyword.language.void.gdscript\"},\"3\":{\"name\":\"entity.name.type.class.gdscript markup.italic\"}},\"name\":\"meta.function.gdscript\",\"patterns\":[{\"include\":\"#parameters\"},{\"include\":\"#line_continuation\"},{\"include\":\"#base_expression\"},{\"include\":\"#any_variable\"},{\"include\":\"#any_property\"}]},\"letter\":{\"match\":\"\\\\b(?:true|false|null)\\\\b\",\"name\":\"constant.language.gdscript\"},\"line_continuation\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"punctuation.separator.continuation.line.gdscript\"},\"2\":{\"name\":\"invalid.illegal.line.continuation.gdscript\"}},\"match\":\"(\\\\\\\\)\\\\s*(\\\\S.*$\\\\n?)\"},{\"begin\":\"(\\\\\\\\)\\\\s*$\\\\n?\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.separator.continuation.line.gdscript\"}},\"end\":\"(?=^\\\\s*$)|(?!(\\\\s*[rR]?(\\\\'\\\\'\\\\'|\\\\\\\"\\\\\\\"\\\\\\\"|\\\\'|\\\\\\\"))|(\\\\G$))\",\"patterns\":[{\"include\":\"#base_expression\"}]}]},\"loose_default\":{\"begin\":\"(=)\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.operator.gdscript\"}},\"end\":\"(,)|(?=\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.separator.parameters.gdscript\"}},\"patterns\":[{\"include\":\"#base_expression\"}]},\"match_keyword\":{\"captures\":{\"1\":{\"name\":\"keyword.control.gdscript\"}},\"match\":\"^\\n\\\\s*(match)\"},\"nodepath_function\":{\"begin\":\"(get_node_or_null|has_node|has_node_and_resource|find_node|get_node)\\\\s*(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"entity.name.function.gdscript\"},\"2\":{\"name\":\"punctuation.definition.parameters.begin.gdscript\"}},\"contentName\":\"meta.function.parameters.gdscript\",\"end\":\"(\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.parameters.end.gdscript\"}},\"name\":\"meta.function.gdscript\",\"patterns\":[{\"begin\":\"(\\\"|')\",\"end\":\"\\\\1\",\"name\":\"string.quoted.gdscript meta.literal.nodepath.gdscript constant.character.escape\",\"patterns\":[{\"match\":\"%\",\"name\":\"keyword.control.flow\"}]},{\"include\":\"#base_expression\"}]},\"nodepath_object\":{\"begin\":\"(NodePath)\\\\s*(?:\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"support.class.library.gdscript\"}},\"end\":\"(?:\\\\))\",\"name\":\"meta.literal.nodepath.gdscript\",\"patterns\":[{\"begin\":\"(\\\"|')\",\"end\":\"\\\\1\",\"name\":\"string.quoted.gdscript constant.character.escape.gdscript\",\"patterns\":[{\"match\":\"%\",\"name\":\"keyword.control.flow.gdscript\"}]}]},\"numbers\":{\"patterns\":[{\"match\":\"0b[01_]+\",\"name\":\"constant.numeric.integer.binary.gdscript\"},{\"match\":\"0x[0-9A-Fa-f_]+\",\"name\":\"constant.numeric.integer.hexadecimal.gdscript\"},{\"match\":\"[-]?(\\\\d[0-9_]+\\\\.[0-9_]*(e[\\\\-+]?[0-9_]+)?)\",\"name\":\"constant.numeric.float.gdscript\"},{\"match\":\"[-]?(\\\\.\\\\d[0-9_]*(e[\\\\-+]?[0-9_]+)?)\",\"name\":\"constant.numeric.float.gdscript\"},{\"match\":\"[-]?(\\\\d[0-9_]*e[\\\\-+]?\\\\[0-9_])\",\"name\":\"constant.numeric.float.gdscript\"},{\"match\":\"[-]?\\\\d[0-9_]*\",\"name\":\"constant.numeric.integer.gdscript\"}]},\"operators\":{\"patterns\":[{\"include\":\"#wordlike_operator\"},{\"include\":\"#boolean_operator\"},{\"include\":\"#arithmetic_operator\"},{\"include\":\"#bitwise_operator\"},{\"include\":\"#compare_operator\"}]},\"parameters\":{\"begin\":\"(\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"punctuation.definition.parameters.begin.gdscript\"}},\"end\":\"(\\\\))\",\"endCaptures\":{\"1\":{\"name\":\"punctuation.definition.parameters.end.gdscript\"}},\"name\":\"meta.function.parameters.gdscript\",\"patterns\":[{\"include\":\"#annotated_parameter\"},{\"captures\":{\"1\":{\"name\":\"variable.parameter.function.language.gdscript\"},\"2\":{\"name\":\"punctuation.separator.parameters.gdscript\"}},\"match\":\"([a-zA-Z_]\\\\w*)\\\\s*(?:(,)|(?=[)#\\\\n=]))\"},{\"include\":\"#comment\"},{\"include\":\"#loose_default\"}]},\"pascal_case_class\":{\"match\":\"\\\\b([A-Z]+[a-z_0-9]*([A-Z]?[a-z_0-9]+)*[A-Z]?)\\\\b\",\"name\":\"entity.name.type.class.gdscript\"},\"round_braces\":{\"begin\":\"\\\\(\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.parenthesis.begin.gdscript\"}},\"end\":\"\\\\)\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.parenthesis.end.gdscript\"}},\"patterns\":[{\"include\":\"#base_expression\"},{\"include\":\"#any_variable\"}]},\"self\":{\"match\":\"\\\\bself\\\\b\",\"name\":\"variable.language.gdscript\"},\"signal_declaration\":{\"begin\":\"\\\\s*(signal)\\\\s+([a-zA-Z_]\\\\w*)\\\\s*(?=\\\\()\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.language.gdscript storage.type.function.gdscript\"},\"2\":{\"name\":\"entity.name.function.gdscript\"}},\"end\":\"((?=[#'\\\"\\\\n]))\",\"name\":\"meta.signal.gdscript\",\"patterns\":[{\"include\":\"#parameters\"},{\"include\":\"#line_continuation\"}]},\"signal_declaration_bare\":{\"captures\":{\"1\":{\"name\":\"keyword.language.gdscript storage.type.function.gdscript\"},\"2\":{\"name\":\"entity.name.function.gdscript\"}},\"match\":\"\\\\s*(signal)\\\\s+([a-zA-Z_]\\\\w*)(?=[\\\\n\\\\s])\",\"name\":\"meta.signal.gdscript\"},\"square_braces\":{\"begin\":\"\\\\[\",\"beginCaptures\":{\"0\":{\"name\":\"punctuation.definition.list.begin.gdscript\"}},\"end\":\"\\\\]\",\"endCaptures\":{\"0\":{\"name\":\"punctuation.definition.list.end.gdscript\"}},\"patterns\":[{\"include\":\"#base_expression\"},{\"include\":\"#any_variable\"}]},\"statement\":{\"patterns\":[{\"include\":\"#extends_statement\"}]},\"statement_keyword\":{\"patterns\":[{\"match\":\"\\\\b(?<!\\\\.)(continue|assert|break|elif|else|if|pass|return|while)\\\\b\",\"name\":\"keyword.control.flow.gdscript\"},{\"match\":\"\\\\b(?<!\\\\.)(class)\\\\b\",\"name\":\"storage.type.class.gdscript\"},{\"captures\":{\"1\":{\"name\":\"keyword.control.flow.gdscript\"}},\"match\":\"^\\\\s*(case|match)(?=\\\\s*([-+\\\\w\\\\d(\\\\[{'\\\":#]|$))\\\\b\"}]},\"string_bracket_placeholders\":{\"patterns\":[{\"captures\":{\"1\":{\"name\":\"constant.character.format.placeholder.other.gdscript\"},\"3\":{\"name\":\"storage.type.format.gdscript\"},\"4\":{\"name\":\"storage.type.format.gdscript\"}},\"match\":\"({{|}}|(?:{\\\\w*(\\\\.[A-Za-z_]\\\\w*|\\\\[[^\\\\]'\\\"]+\\\\])*(![rsa])?(:\\\\w?[<>=^]?[-+ ]?\\\\#?\\\\d*,?(\\\\.\\\\d+)?[bcdeEfFgGnosxX%]?)?}))\",\"name\":\"meta.format.brace.gdscript\"},{\"captures\":{\"1\":{\"name\":\"constant.character.format.placeholder.other.gdscript\"},\"3\":{\"name\":\"storage.type.format.gdscript\"},\"4\":{\"name\":\"storage.type.format.gdscript\"}},\"match\":\"({\\\\w*(\\\\.[A-Za-z_]\\\\w*|\\\\[[^\\\\]'\\\"]+\\\\])*(![rsa])?(:)[^'\\\"{}\\\\n]*(?:\\\\{[^'\\\"}\\\\n]*?\\\\}[^'\\\"{}\\\\n]*)*})\",\"name\":\"meta.format.brace.gdscript\"}]},\"string_percent_placeholders\":{\"captures\":{\"1\":{\"name\":\"constant.character.format.placeholder.other.gdscript\"}},\"match\":\"(%(\\\\([\\\\w\\\\s]*\\\\))?[-+#0 ]*(\\\\d+|\\\\*)?(\\\\.(\\\\d+|\\\\*))?([hlL])?[diouxXeEfFgGcrsab%])\",\"name\":\"meta.format.percent.gdscript\"},\"strings\":{\"begin\":\"(r)?(\\\"\\\"\\\"|'''|\\\"|')\",\"beginCaptures\":{\"1\":{\"name\":\"constant.character.escape.gdscript\"}},\"end\":\"\\\\2\",\"name\":\"string.quoted.gdscript\",\"patterns\":[{\"match\":\"\\\\\\\\.\",\"name\":\"constant.character.escape.gdscript\"},{\"include\":\"#string_percent_placeholders\"},{\"include\":\"#string_bracket_placeholders\"}]},\"variable_declaration\":{\"begin\":\"\\\\b(?:(var)|(const))\\\\b\",\"beginCaptures\":{\"1\":{\"name\":\"keyword.language.gdscript storage.type.var.gdscript\"},\"2\":{\"name\":\"keyword.language.gdscript storage.type.const.gdscript\"}},\"end\":\"$|;\",\"name\":\"meta.variable.declaration.gdscript\",\"patterns\":[{\"captures\":{\"1\":{\"name\":\"punctuation.separator.annotation.gdscript\"},\"2\":{\"name\":\"keyword.language.gdscript storage.type.const.gdscript\"},\"3\":{\"name\":\"entity.name.function.gdscript\"}},\"match\":\"(:)?\\\\s*(set|get)\\\\s+=\\\\s+([a-zA-Z_]\\\\w*)\"},{\"match\":\":=|=(?!=)\",\"name\":\"keyword.operator.assignment.gdscript\"},{\"captures\":{\"1\":{\"name\":\"punctuation.separator.annotation.gdscript\"},\"2\":{\"name\":\"entity.name.type.class.gdscript\"}},\"match\":\"(:)\\\\s*([a-zA-Z_]\\\\w*)?\"},{\"captures\":{\"1\":{\"name\":\"keyword.language.gdscript storage.type.const.gdscript\"},\"2\":{\"name\":\"entity.name.function.gdscript\"},\"3\":{\"name\":\"entity.name.function.gdscript\"}},\"match\":\"(setget)\\\\s+([a-zA-Z_]\\\\w*)(?:[,]\\\\s*([a-zA-Z_]\\\\w*))?\"},{\"include\":\"#expression\"},{\"include\":\"#letter\"},{\"include\":\"#any_variable\"},{\"include\":\"#any_property\"},{\"include\":\"#keywords\"}]},\"wordlike_operator\":{\"match\":\"\\\\b(and|or|not)\\\\b\",\"name\":\"keyword.operator.wordlike.gdscript\"}},\"scopeName\":\"source.gdscript\"}"));

const gdscript = [
lang
];

export { gdscript as default };
