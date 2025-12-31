class GrblLineParserResultOk {
  static parse(line) {
    // Match "ok" or "ok N<linenumber>" (some firmware includes line numbers)
    const r = line.match(/^ok(?:\s+N\d+)?$/);
    if (!r) {
      return null;
    }

    const payload = {
      raw: line
    };

    return {
      type: GrblLineParserResultOk,
      payload: payload
    };
  }
}

export default GrblLineParserResultOk;
