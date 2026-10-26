const supabase = require("../config/supabaseClient");

class NewsletterService {
  async subscribe(email, source) {
    const normalizedEmail = email.trim().toLowerCase();

    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .upsert(
        [
          {
            email: normalizedEmail,
            source: source || "footer_newsletter",
          },
        ],
        { onConflict: "email" }
      )
      .select();

    if (error) throw error;
    return data[0];
  }
}

module.exports = new NewsletterService();