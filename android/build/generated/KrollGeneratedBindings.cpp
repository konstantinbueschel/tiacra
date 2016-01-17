/* C++ code produced by gperf version 3.0.3 */
/* Command-line: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/gperf -L C++ -E -t /private/var/folders/hn/jw7lmhl52hq3dw7g8lm1wm5r0000gn/T/aimeewang/acra-generated/KrollGeneratedBindings.gperf  */
/* Computed positions: -k'' */

#line 3 "/private/var/folders/hn/jw7lmhl52hq3dw7g8lm1wm5r0000gn/T/aimeewang/acra-generated/KrollGeneratedBindings.gperf"


#include <string.h>
#include <v8.h>
#include <KrollBindings.h>

#include "ti.acra.TiacraModule.h"


#line 13 "/private/var/folders/hn/jw7lmhl52hq3dw7g8lm1wm5r0000gn/T/aimeewang/acra-generated/KrollGeneratedBindings.gperf"
struct titanium::bindings::BindEntry;
/* maximum key range = 1, duplicates = 0 */

class TiacraBindings
{
private:
  static inline unsigned int hash (const char *str, unsigned int len);
public:
  static struct titanium::bindings::BindEntry *lookupGeneratedInit (const char *str, unsigned int len);
};

inline /*ARGSUSED*/
unsigned int
TiacraBindings::hash (register const char *str, register unsigned int len)
{
  return len;
}

struct titanium::bindings::BindEntry *
TiacraBindings::lookupGeneratedInit (register const char *str, register unsigned int len)
{
  enum
    {
      TOTAL_KEYWORDS = 1,
      MIN_WORD_LENGTH = 20,
      MAX_WORD_LENGTH = 20,
      MIN_HASH_VALUE = 20,
      MAX_HASH_VALUE = 20
    };

  static struct titanium::bindings::BindEntry wordlist[] =
    {
      {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""},
      {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""}, {""},
      {""}, {""},
#line 15 "/private/var/folders/hn/jw7lmhl52hq3dw7g8lm1wm5r0000gn/T/aimeewang/acra-generated/KrollGeneratedBindings.gperf"
      {"ti.acra.TiacraModule", ::ti::acra::TiacraModule::bindProxy, ::ti::acra::TiacraModule::dispose}
    };

  if (len <= MAX_WORD_LENGTH && len >= MIN_WORD_LENGTH)
    {
      unsigned int key = hash (str, len);

      if (key <= MAX_HASH_VALUE)
        {
          register const char *s = wordlist[key].name;

          if (*str == *s && !strcmp (str + 1, s + 1))
            return &wordlist[key];
        }
    }
  return 0;
}
#line 16 "/private/var/folders/hn/jw7lmhl52hq3dw7g8lm1wm5r0000gn/T/aimeewang/acra-generated/KrollGeneratedBindings.gperf"

