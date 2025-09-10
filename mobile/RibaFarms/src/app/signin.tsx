import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";

const authSchema = zod.object({
  email: zod.string().email({ message: "Invalid email address " }),
  password: zod
    .string()
    .min(8, { message: "Password must be at least 8 characters long " }),
});

export default function Authentication() {
  const router = useRouter();
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signIn = (data: zod.infer<typeof authSchema>) => {
    console.log(data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>
        Are you a new farmer?{" "}
        <Text style={styles.signUpText} onPress={() => router.push("/")}>
          Sign Up
        </Text>
      </Text>
      <Text style={styles.title}>Welcome</Text>

      {/* email */}
      <Controller
        control={control}
        name="email"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[styles.input, error && styles.inputError]}
              placeholder="Enter your email address"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="none"
              keyboardType="email-address"
              editable={!formState.isSubmitting}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />

      {/* password */}
      <Controller
        control={control}
        name="password"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[styles.input, error && styles.inputError]}
              placeholder="Enter your password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry
              autoCapitalize="none"
              editable={!formState.isSubmitting}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
      />

      {/* sign up button */}
      <TouchableOpacity
        style={[styles.button, formState.isSubmitting && styles.buttonDisabled]}
        onPress={handleSubmit(signIn)}
        disabled={formState.isSubmitting}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* OR separator between buttons */}
      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* sign up with google button*/}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 8,
    fontSize: 12,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  buttonDisabled: {
    backgroundColor: "#9CCC9C",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signUpText: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
  googleButton: {
    padding: 16,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 12,
  },
  googleButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  separatorText: {
    marginHorizontal: 8,
    color: "#666",
    fontWeight: "bold",
  },
});
